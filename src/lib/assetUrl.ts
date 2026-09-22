/**
 * Resolves a path in public/ against Vite's base path, so links keep
 * working when the site is served from a subpath (GitHub Pages project
 * sites serve from /<repo-name>/, not /).
 */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
