export async function load(url, context, nextLoad) {
  if (url.endsWith('.html') || url.endsWith('.css')) {
    return {
      format: 'module',
      shortCircuit: true,
      source: 'export default "";',
    };
  }
  return nextLoad(url, context);
}
