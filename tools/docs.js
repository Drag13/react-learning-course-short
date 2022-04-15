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
  const lessons = data.lessons.filter((x) => !x.hidden);
  const finishedLectures = lessons.reduce(
    (acc, v) => (v.published ? acc + 1 : acc),
    0
  );
  const fixedPercentage = (finishedLectures / lessons.length) * 100;
  data.lessons = lessons.map((l, i) => ({
    ...l,
    i,
    presentation: l.published
      ? `https://drag13.io/react-learning-course-short/${l.name}`
      : "",
  }));
  data.progress = lessons.map((ls) => (ls.published ? `✔️ ` : `⏳ `));
  data.progressPercentage = `${fixedPercentage.toFixed(0)}%`;
  renderProgram(data);
  renderReadme(data);
})(process.argv.splice(2));
