const { render } = require("mustache");
const { readFile, writeFile } = require("./fs");

function renderProgram(data) {
  const template = readFile("./templates/_full-program.md");
  const res = render(template, data);
  writeFile("PROGRAM.md", res);
}

function renderReadme(data) {
  const template = readFile("./templates/_readme.md");
  const res = render(template, data);
  writeFile("README.md", res);
}

(function cli() {
  const data = require("../course.json");
  data.lessons = data.lessons.map((l, i) => ({ ...l, i }));
  data.progress = data.lessons.map((ls) => (ls.presentation ? `✔️ ` : `⏳ `));
  renderProgram(data);
  renderReadme(data);
})(process.argv.splice(2));
