# sizhean.github.io

This branch is what GitHub Pages serves at https://sizhean.github.io. It is
build output, not source: the homepage is built from the Astro project on the
`redesign/v3` branch.

Kept from the old Jekyll site, because papers cite these URLs:

- `mri.html` — https://sizhean.github.io/mri (mRI, NeurIPS 2022 Datasets & Benchmarks)
- `panohead.html` — https://sizhean.github.io/panohead (PanoHead, CVPR 2023)
- `static/` and `images/` — the CSS, JS and GIFs those two pages load
- `google1f7c19a0501852b5.html` (Search Console) and `robots.txt`

To redeploy: build `redesign/v3` (`npm run build`) and copy `dist/` here,
except `dist/mri/` and `dist/panohead/`. Those are stub pages and would
shadow the two project pages above. Keep `.nojekyll`.
