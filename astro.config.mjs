// @ts-check
import { defineConfig } from 'astro/config';

// Review-environment-only setting. SITE_BASE is unset for the
// production build, so `base` defaults to "/" and every internal
// link (via src/utils/url.ts withBase()) resolves exactly as before.
// Set SITE_BASE=/maroriri-review/ only when building for the staging
// subdirectory — see README / deploy notes.
const base = process.env.SITE_BASE || '/';

// https://astro.build/config
export default defineConfig({
	base,
	// 暫定対応: Astro生成のmeta refreshリダイレクト（真の301ではない）。
	// 公開前TODO: 本番デプロイ先を確定後、ホスティング側（Netlify _redirects /
	// Vercel rewrites / Apache .htaccess 等）で正式な301リダイレクトを設定する。
	redirects: {
		"/coder-club/": "/maroriri-plus/",
	},
});
