export function createMemoryStorage(initial = {}) {
  const data = new Map(Object.entries(initial).map(([k, v]) => [String(k), String(v)]));
  return {
    getItem(key) { return data.has(String(key)) ? data.get(String(key)) : null; },
    setItem(key, value) { data.set(String(key), String(value)); },
    removeItem(key) { data.delete(String(key)); },
    clear() { data.clear(); },
    key(index) { return [...data.keys()][index] ?? null; },
    get length() { return data.size; },
    dump() { return Object.fromEntries(data); },
  };
}

function makeClassList() {
  const values = new Set();
  return {
    add(...names) { names.forEach(name => values.add(name)); },
    remove(...names) { names.forEach(name => values.delete(name)); },
    contains(name) { return values.has(name); },
    toggle(name, force) {
      if (force === true) { values.add(name); return true; }
      if (force === false) { values.delete(name); return false; }
      if (values.has(name)) { values.delete(name); return false; }
      values.add(name); return true;
    },
    toString() { return [...values].join(' '); },
  };
}

export function createFakeElement(tagName = 'div') {
  const listeners = new Map();
  const children = [];
  const attributes = new Map();
  return {
    tagName: String(tagName).toUpperCase(),
    style: {},
    dataset: {},
    classList: makeClassList(),
    children,
    parentNode: null,
    textContent: '',
    innerHTML: '',
    value: '',
    disabled: false,
    checked: false,
    appendChild(child) { children.push(child); child.parentNode = this; return child; },
    remove() { if (!this.parentNode?.children) return; const i = this.parentNode.children.indexOf(this); if (i >= 0) this.parentNode.children.splice(i, 1); },
    setAttribute(name, value) { attributes.set(String(name), String(value)); },
    getAttribute(name) { return attributes.get(String(name)) ?? null; },
    addEventListener(type, fn) { const list = listeners.get(type) || []; list.push(fn); listeners.set(type, list); },
    removeEventListener(type, fn) { const list = listeners.get(type) || []; listeners.set(type, list.filter(item => item !== fn)); },
    dispatchEvent(event) { for (const fn of listeners.get(event?.type) || []) fn.call(this, event); return true; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    closest() { return null; },
    focus() {},
    click() { this.dispatchEvent({ type: 'click', target: this, preventDefault() {} }); },
    getBoundingClientRect() { return { left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40 }; },
  };
}

export function createFakeDocument() {
  const elementsById = new Map();
  const head = createFakeElement('head');
  const body = createFakeElement('body');
  return {
    readyState: 'complete',
    hidden: false,
    head,
    body,
    documentElement: createFakeElement('html'),
    scripts: [],
    styleSheets: [],
    createElement: createFakeElement,
    getElementById(id) { return elementsById.get(id) || null; },
    registerElement(id, element = createFakeElement()) { elementsById.set(id, element); return element; },
    querySelector() { return null; },
    querySelectorAll() { return []; },
    addEventListener() {},
    removeEventListener() {},
  };
}

export function createEventTarget() {
  const listeners = new Map();
  return {
    addEventListener(type, fn) { const list = listeners.get(type) || []; list.push(fn); listeners.set(type, list); },
    removeEventListener(type, fn) { const list = listeners.get(type) || []; listeners.set(type, list.filter(item => item !== fn)); },
    dispatchEvent(event) { for (const fn of listeners.get(event?.type) || []) fn.call(this, event); return true; },
  };
}

export function installBrowserGlobals({ href = 'https://www.yuketang.cn/web', storage = {}, gmRequest = null } = {}) {
  const document = createFakeDocument();
  const events = createEventTarget();
  const url = new URL(href);
  const localStorage = createMemoryStorage(storage);
  const window = {
    ...events,
    document,
    localStorage,
    location: {
      href: url.href,
      origin: url.origin,
      protocol: url.protocol,
      host: url.host,
      hostname: url.hostname,
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
      assign(next) { this.href = String(next); },
      replace(next) { this.href = String(next); },
      reload() {},
    },
    history: { pushState() {}, replaceState() {} },
    navigator: {},
    unsafeWindow: null,
    GM_xmlhttpRequest: gmRequest,
    GM_notification: undefined,
    GM_addStyle: undefined,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
  };
  window.window = window;
  window.unsafeWindow = window;

  globalThis.window = window;
  globalThis.document = document;
  globalThis.localStorage = localStorage;
  globalThis.location = window.location;
  globalThis.navigator = window.navigator;
  globalThis.CustomEvent = class CustomEvent {
    constructor(type, init = {}) { this.type = type; this.detail = init.detail; }
  };
  globalThis.Event = class Event { constructor(type) { this.type = type; } };
  globalThis.HTMLElement = class HTMLElement {};
  globalThis.MutationObserver = class MutationObserver { observe() {} disconnect() {} };
  return { window, document, localStorage };
}

export function uninstallBrowserGlobals() {
  for (const key of ['window', 'document', 'localStorage', 'location', 'navigator', 'CustomEvent', 'Event', 'HTMLElement', 'MutationObserver', 'XMLHttpRequest']) {
    try { delete globalThis[key]; } catch {}
  }
}

export function createGmRequestRecorder() {
  const calls = [];
  const queue = [];
  const fn = options => {
    calls.push(options);
    const next = queue.shift();
    if (!next) return { abort() {} };
    queueMicrotask(() => {
      if (next.type === 'error') options.onerror?.(next.error || new Error('network error'));
      else options.onload?.({ status: next.status ?? 200, responseText: typeof next.body === 'string' ? next.body : JSON.stringify(next.body ?? {}) });
    });
    return { abort() {} };
  };
  return {
    fn,
    calls,
    respond(body, status = 200) { queue.push({ type: 'load', body, status }); },
    fail(error) { queue.push({ type: 'error', error }); },
  };
}

export function createXMLHttpRequestRecorder() {
  const calls = [];
  const queue = [];
  class FakeXMLHttpRequest {
    constructor() {
      this.headers = {};
      this.responseText = '';
      this.status = 0;
      this.onload = null;
      this.onerror = null;
      this.method = null;
      this.url = null;
      this.body = null;
      calls.push(this);
    }
    open(method, url) { this.method = method; this.url = url; }
    setRequestHeader(name, value) { this.headers[name] = value; }
    send(body) {
      this.body = body;
      const next = queue.shift();
      queueMicrotask(() => {
        if (!next || next.type === 'error') { this.onerror?.(next?.error || new Error('network error')); return; }
        this.status = next.status ?? 200;
        this.responseText = typeof next.body === 'string' ? next.body : JSON.stringify(next.body ?? {});
        this.onload?.();
      });
    }
  }
  return {
    FakeXMLHttpRequest,
    calls,
    respond(body, status = 200) { queue.push({ type: 'load', body, status }); },
    fail(error) { queue.push({ type: 'error', error }); },
  };
}
