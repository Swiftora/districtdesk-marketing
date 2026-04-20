// Paths (directory prefixes) that must never be publicly accessible.
// VCS metadata, Wrangler build artifacts, CI config, and Worker source.
const BLOCKED_PREFIXES = /^\/(\.git|\.wrangler|\.github|src)(\/|$)/i;

// Exact file paths (build tooling / config) that must never be publicly accessible.
// Wrangler's [assets] exclude is not reliably honored, so we also block at runtime.
const BLOCKED_FILES = /^\/(wrangler\.toml|package\.json|package-lock\.json|CLOUDFLARE_EMAIL_SETUP\.md|\.gitignore)$/i;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (BLOCKED_PREFIXES.test(url.pathname) || BLOCKED_FILES.test(url.pathname)) {
      return new Response('Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
