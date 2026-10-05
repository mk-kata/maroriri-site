## Structure

The live site is static HTML served from the Lolipop web root (maroriri.com). There is no build step.

- `public/` — shared images and other assets referenced by the pages (e.g. `/assets/img/...`), kept in this repository.
- The page HTML itself is not kept in this repository; it lives on the server. Previous versions remain in git history (the `preview/` folder was removed in the commit that introduced this file).

## Publishing

Commit and `git push origin main` after each change, and upload any changed files directly to the server over SSH. Connection details live in `.deploy/lolipop.env`, which is gitignored and must never be committed or copied into this file.
