export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    // Block VCS / build metadata that should never be public
    if (/^\/(\.git|\.wrangler|\.github)(\/|$)/i.test(url.pathname)) {
      return new Response('Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
