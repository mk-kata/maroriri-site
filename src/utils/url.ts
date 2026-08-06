/**
 * Prefixes an internal, root-relative path with Astro's configured
 * `base` (import.meta.env.BASE_URL). Needed because Astro does not
 * rewrite hrefs written directly in markup — only its own generated
 * asset links get the base prefix automatically.
 *
 * Leaves absolute URLs (http/https) and same-page hash links (#...)
 * untouched. In production `base` is unset (defaults to "/"), so
 * this resolves to the exact same href as a plain string — this
 * helper is safe to use everywhere, not just in the review build.
 */
export function withBase(path: string): string {
	if (/^https?:\/\//.test(path) || path.startsWith("#")) return path;
	const base = import.meta.env.BASE_URL;
	const clean = path.startsWith("/") ? path.slice(1) : path;
	return base + clean;
}
