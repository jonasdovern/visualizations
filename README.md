# Visualizations

Interactive maps and figures by Jonas Dovern. This repository holds multiple independent visualizations and a shared gallery.

## Website

- Gallery: https://jonasdovern.github.io/visualizations/
- Election map: https://jonasdovern.github.io/visualizations/bundestagswahl-2025/
- NRW state election: https://jonasdovern.github.io/visualizations/nrw-landtagswahl-2022/
- Decision trees: https://jonasdovern.github.io/visualizations/decision-trees/

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
| `docs/nrw-landtagswahl-2022/` | NRW 2022 map, preview, data and source notes |
| `docs/decision-trees/index.html` | Standalone multilingual decision-tree introduction |
| `docs/decision-trees/preview.jpg` | Gallery thumbnail |
| `docs/decision-trees/LICENSE.txt` | CC BY-NC-SA 4.0 terms and R2D3 credits |
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

## Publish manually using the GitHub website

1. Prepare a folder such as `my-visualization` on your computer. Put the finished page inside as `index.html`, plus any assets, a preview image, and source/licence information. For a self-contained HTML page, no build is needed.
2. Open `docs/` in this repository on the `main` branch. Choose **Add file → Upload files**, then drag your whole `my-visualization` folder into the upload area. Check that the uploaded paths are `docs/my-visualization/...`.
3. Commit the upload to `main`. If using a separate branch, open and merge its pull request into `main`.
4. Edit `docs/visualizations.js` with the pencil button. Copy an existing catalogue object, insert a comma between entries, and update its title, description, `href` and thumbnail path. Also increment the `?v=` value on the `visualizations.js` script reference in `docs/index.html` (for example, `?v=20261116-3`) so browsers load the updated catalogue. Commit both changes. Uploading files makes the direct page available; this catalogue entry adds it to the gallery.
5. Open **Actions** and wait for **pages build and deployment** to succeed for the latest commit.
6. Open `https://jonasdovern.github.io/visualizations/my-visualization/` and check the gallery link and interactions.

The existing Pages setting is **Settings → Pages → Deploy from a branch → main → /docs**. It is shared by all visualizations and only needs setting once. Do not replace `docs/index.html` with an individual visualization; that file is the gallery. Upload the extracted files and folders, not a ZIP archive. For updates, replace files in the same visualization folder to keep its URL stable.

## Local preview

Open `docs/index.html` directly, or serve the published directory with:

```sh
python -m http.server 8000 --directory docs
```

Then open http://localhost:8000/. This site has no analytics, external fonts or remote JavaScript dependencies. The election map embeds its data and Three.js; it needs a browser with JavaScript and WebGL.

## Licences

Original gallery and election-visualization code: MIT, see `LICENSE`. The decision-tree adaptation and its embedded R2D3 housing data are **CC BY-NC-SA 4.0**, see `docs/decision-trees/LICENSE.txt`; the root MIT licence does not override those terms. Bundestag 2025 election data and geometry: **Datenlizenz Deutschland – Namensnennung 2.0**. NRW 2022 results retain the election authority’s source notices; the Stadt Lünen boundary service is **CC BY 4.0**. Provider credits and transformation notes accompany each map. Three.js: its original MIT licence. The repository MIT licence does not replace third-party or data terms. See `NOTICE.md`.
