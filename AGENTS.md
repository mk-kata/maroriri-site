## Structure

This site is maintained as static HTML. There is no build step.

- `preview/` — all page HTML and page-specific CSS. This is the source of truth.
- `public/` — shared images and other assets referenced by the pages (e.g. `/assets/img/...`).

## Editing

Edit files under `preview/` and `public/` directly. Check the change by opening the HTML file in a browser, or by viewing it on the live preview URL after upload.

## Publishing

After a change is finished: commit, `git push origin main`, then upload `preview/` to the server over SSH. Connection details live in `.deploy/lolipop.env`, which is gitignored and must never be committed or copied into this file.
