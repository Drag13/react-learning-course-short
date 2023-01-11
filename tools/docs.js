const { render } = require('mustache');
const { readFile, writeFile } = require('./fs');

function renderProgram(data) {
  const template = readFile('./templates/_full-program.md');
  const res = render(template, data);
  writeFile('PROGRAM.md', res);
}

function renderReadme(data) {
  const template = readFile('./templates/_readme.md');
  const res = render(template, data);
  writeFile('README.md', res);
}

(function cli() {
  const data = require('../course.json');
  const lessons = data.lessons.filter((x) => !x.hidden);
  data.lessons = lessons.map((l, i) => {
    const presentation = l.published
      ? `https://drag13.io/react-learning-course-short/${l.name}`
      : '';
    const link = l.youtube ?? presentation;

    return { ...l, i, presentation, link };
  });
  renderProgram(data);
  renderReadme(data);
})(process.argv.splice(2));
