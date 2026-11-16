// Add one entry per visualization. Paths are relative to docs/.
// Keep existing folder names stable so shared links continue to work.
window.VISUALIZATIONS = [
  {
    title: "Bundestagswahl 2025",
    subtitle: "Germany’s electoral landscape",
    description: "Explore the final second-vote results across all 299 constituencies. Colour shows the leading party; the third dimension reveals where eligible voters are concentrated.",
    href: "bundestagswahl-2025/",
    thumbnail: "bundestagswahl-2025/preview.webp",
    thumbnailAlt: "Flat and three-dimensional maps of Germany showing constituency election leaders and eligible-voter density",
    tags: ["Elections", "Germany", "Interactive 3D map"],
    source: "Official data · Die Bundeswahlleiterin"
  },
  {
    "title": "A Visual Introduction to Decision Trees",
    "subtitle": "Learn from New York and San Francisco homes",
    "description": "Scroll through real housing data, choose splits using entropy, and watch test observations pass through a decision tree. Explore tree depth, prediction paths and accuracy in six languages.",
    "href": "decision-trees/",
    "thumbnail": "decision-trees/preview.jpg",
    "thumbnailAlt": "A depth-four decision tree classifying New York and San Francisco homes, with 127 of 148 test observations classified correctly",
    "tags": [
      "Machine learning",
      "Decision trees",
      "Interactive tutorial"
    ],
    "source": "Housing data and example · R2D3"
  }
];
