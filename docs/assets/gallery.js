"use strict";
const gallery = document.getElementById("gallery");
const entries = window.VISUALIZATIONS || [];
function node(tag, cls, text) { const el = document.createElement(tag); if (cls) el.className = cls; if (text) el.textContent = text; return el; }
for (const item of entries) {
  const card = node("article", "card");
  const preview = node("a", "preview"); preview.href = item.href; preview.tabIndex = -1; preview.setAttribute("aria-hidden", "true");
  const img = node("img"); img.src = item.thumbnail; img.alt = item.thumbnailAlt || ""; img.width = 1200; img.height = 819; img.loading = "lazy"; preview.append(img);
  const body = node("div", "card-body"); const tags = node("div", "tags");
  for (const tag of item.tags || []) tags.append(node("span", "", tag));
  body.append(tags, node("h3", "", item.title), node("p", "subtitle", item.subtitle), node("p", "description", item.description), node("p", "source", item.source));
  const link = node("a", "open", "Explore visualization →"); link.href = item.href; link.setAttribute("aria-label", "Explore " + item.title); body.append(link);
  card.append(preview, body); gallery.append(card);
}
document.getElementById("count").textContent = entries.length + (entries.length === 1 ? " visualization" : " visualizations");
