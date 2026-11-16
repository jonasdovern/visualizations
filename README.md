# Visualizations

Interactive maps and figures by Jonas Dovern. This repository holds multiple independent visualizations and a shared gallery.

## Website

- Gallery: https://jonasdovern.github.io/visualizations/
- Election map: https://jonasdovern.github.io/visualizations/bundestagswahl-2025/

GitHub Pages publishes from **main → /docs**. Commits to `main` update the website automatically after the Pages deployment completes. No npm installation, framework, custom workflow, or compilation is needed.

## Structure

| Path | Purpose |
| --- | --- |
| `docs/index.html` | Gallery homepage |
| `docs/visualizations.js` | Catalogue: one entry per visualization |
| `docs/assets/` | Shared gallery CSS and JavaScript |
| `docs/bundestagswahl-2025/index.html` | Self-contained interactive election map |
| `docs/bundestagswahl-2025/preview.webp` | Lightweight gallery thumbnail |
| `docs/bundestagswahl-2025/sources.html` | Sources, methodology and attribution |
| `docs/bundestagswahl-2025/constituencies.csv` | Derived constituency data |
| `docs/bundestagswahl-2025/audit.json` | Provenance, hashes and reconciliation totals |
| `docs/licenses/` | Licences that accompany downloadable website files |
| `LICENSE` | MIT licence for original project code |
| `NOTICE.md` | Scope of third-party and official-data licences |

Only `docs/` is published. Repository documentation and future analysis scripts can live outside that directory.

## Add another visualization

1. Choose a stable, descriptive lowercase folder name, for example `inflation-expectations`.
2. Create `docs/inflation-expectations/` and put the visualization inside it as `index.html`. Put its own data and other assets in that same folder; use relative links.
3. Add a thumbnail, preferably `preview.webp`, and source/method/licence information.
4. Add one object to the array in `docs/visualizations.js`, following the existing example:

```javascript
{
  title: "Inflation expectations",
  subtitle: "A short descriptive subtitle",
  description: "Explain what visitors can explore.",
  href: "inflation-expectations/",
  thumbnail: "inflation-expectations/preview.webp",
  thumbnailAlt: "Describe the preview for screen-reader users",
  tags: ["Expectations", "Economics"],
  source: "Name the data provider"
}
```

Separate objects with commas. The order in this array is the gallery order; the first visualization is featured. The gallery updates without editing its HTML or CSS. The example above is documentation only, not a published visualization.

5. Commit the files to `main`. Once Pages finishes deploying, the new page is available at `/visualizations/inflation-expectations/`.

`index.html` is a folder's default page: the root one is the gallery; each visualization gets its own. Keep published folder names unchanged to preserve shared links. Folder names are case-sensitive on GitHub Pages. Avoid paths beginning with `/`, because those point to the account root rather than this project site.

## Local preview

Open `docs/index.html` directly, or serve the published directory with:

```sh
python -m http.server 8000 --directory docs
```

Then open http://localhost:8000/. This site has no analytics, external fonts or remote JavaScript dependencies. The election map embeds its data and Three.js; it needs a browser with JavaScript and WebGL.

## Licences

Original visualization and gallery code: MIT, see `LICENSE`. Official election data and geometry: **Datenlizenz Deutschland – Namensnennung 2.0**, with provider credits and transformation notes on the source page. Three.js: its original MIT licence. The repository MIT licence does not replace third-party or data terms. See `NOTICE.md`.
