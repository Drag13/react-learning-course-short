import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";

let deck = new Reveal({
  plugins: [Markdown, Highlight],
});
deck.initialize();
