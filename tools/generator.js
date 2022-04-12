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
  const finishedLectures = data.lessons.reduce(
    (acc, v) => (v.presentation ? acc + 1 : acc),
    0
  );
  const fixedPercentage = (finishedLectures / data.lessons.length) * 100;
  data.lessons = data.lessons.map((l, i) => ({ ...l, i }));
  data.progress = data.lessons.map((ls) => (ls.presentation ? `✔️ ` : `⏳ `));
  data.progressPercentage = `${fixedPercentage.toFixed(0)}%`;
  renderProgram(data);
  renderReadme(data);
})(process.argv.splice(2));
