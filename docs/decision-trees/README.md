# A Visual Introduction to Decision Trees

Live page: https://jonasdovern.github.io/visualizations/decision-trees/

`index.html` is self-contained. All styles, JavaScript, six translations and the original housing CSV are embedded; no build, server or external library is required. It can also be opened offline in a browser.

## Interaction

Scroll through fourteen panels. Adjust an elevation threshold, inspect entropy and classification errors, watch 148 held-out homes pass through a depth-four tree, vary the maximum tree depth, or follow a selected home. The home selector cycles through distinct observations in a shuffled order. Languages: English, German, Spanish, French, Ukrainian and Simplified Chinese. Add `?lang=de` (or `es`, `fr`, `uk`, `zh`) to start in another language.

## Data and method

Original housing data and example: Stephanie Yee and Tony Chu (R2D3), https://github.com/jadeyee/r2d3-part-1-data.

All 492 source records are retained. Identical predictor vectors stay together in a deterministic grouped training/test partition (seed 2026): 344 training observations and 148 test observations. Splits minimize size-weighted entropy using logarithms to base 2 and training data only. The first split is elevation at 40 metres. The full tree has depth 10; training accuracy is 100%, test accuracy is 132/148 (89.2%). At depth 4, test accuracy is 127/148 (85.8%).

The individual-home selector contains 321 distinct training homes and 138 distinct test homes, while model fitting, reported accuracy and the test-flow animation use the full respective samples. Historical teaching data are not a representative sample of either housing market. Choosing a depth using the displayed test curve would require a separate untouched test set for an unbiased final assessment.

Further method details, credits, external source links and a CSV download are included at the bottom of the page.

## Reuse

This adaptation and its embedded dataset are CC BY-NC-SA 4.0; see [LICENSE.txt](LICENSE.txt). The root repository's MIT licence does not override these terms.
