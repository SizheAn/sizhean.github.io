# Preview build — homepage redesign, round 1

Generated output only. **Do not edit these files by hand** and do not merge this
branch into `master`.

- Source branch: `redesign/v2`
- Built with: `npm run build` (Astro 5 -> `dist/`, then `scripts/relativize-dist.mjs`)
- Every local URL is relative, so this build works from any path prefix.

`.nojekyll` is required: GitHub Pages runs Jekyll by default and Jekyll skips
directories beginning with an underscore, which would 404 everything in `_astro/`.

The live site is unaffected — it is served from `master`.
