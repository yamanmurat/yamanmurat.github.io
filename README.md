# yamanmurat.github.io

Personal academic website of **Murat Yaman, Ph.D.**, computational biochemist
(quantum mechanics, molecular dynamics, conformational free energy methods).

Live at <https://yamanmurat.github.io>.

## Structure

- `index.html` (the whole site: About, Research, Publications, Software, CV, Contact)
- `css/styles.css` (styling)
- `js/main.js` (smooth scrolling, active nav highlighting, mobile nav, copyright year)
- `images/glycan-bg.png` (background texture)

The page is text only. There are no figures.

## Updating content

Everything is plain HTML. Edit `index.html` directly.

- **Publications**: add a `<div class="publication">` block inside the relevant
  list. Keep peer-reviewed articles and manuscripts in preparation separated by
  their `subsection-title` headings.
- **CV**: each entry is a `<div class="cv-item">` with `h4` (title),
  `.institution`, `.year`, and either `.description` or a `<ul>`.
- **Contact links**: in the `#contact` section.

## Deploying

GitHub Pages serves the `main` branch from the repository root. Commit and push:

```bash
git add -A
git commit -m "Update site content"
git push origin main
```

Changes appear at <https://yamanmurat.github.io> within a minute or two.
