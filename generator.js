const mustache = require("mustache");
const { readFileSync, writeFileSync } = require("fs");

const writeFile = (path, data) =>
  writeFileSync(path, data, { encoding: "utf-8" });
const readFile = (path) => readFileSync(path, { encoding: "utf-8" });

function renderProgram(data) {
  const template = readFile("./templates/_full-programm.md");
  const res = mustache.render(template, data);
  writeFile("PROGRAM.md", res);
}

function renderReadme(data) {
  const template = readFile("./templates/_readme.md");
  const res = mustache.render(template, data);
  writeFile("README.md", res);
}

(function cli() {
  const data = require("./course.json");
  data.lessons = data.lessons.map((l, i) => ({ ...l, i }));
  renderProgram(data);
  renderReadme(data);
})(process.argv.splice(2));
