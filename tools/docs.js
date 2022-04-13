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
    (acc, v) => (v.published ? acc + 1 : acc),
    0
  );
  const fixedPercentage = (finishedLectures / data.lessons.length) * 100;
  data.lessons = data.lessons.map((l, i) => ({ ...l, i }));
  data.progress = data.lessons.map((ls) => (ls.published ? `✔️ ` : `⏳ `));
  data.progressPercentage = `${fixedPercentage.toFixed(0)}%`;
  data.lessons.forEach(
    (l) =>
      l.published &&
      (l.presentation = `https://drag13.io/react-learning-course-short/${l.name}`)
  );
  renderProgram(data);
  renderReadme(data);
})(process.argv.splice(2));
