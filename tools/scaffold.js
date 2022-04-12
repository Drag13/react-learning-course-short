const { render } = require("mustache");
const { join } = require("path");
const { readFile, writeFile, exists } = require("./fs");
const { cwd } = require("process");
const { mkdirSync } = require("fs");
const course = require("../course.json");

const ROOT = "./presentations";
const LAYOUT = "./templates/_layout.html";
const BODY = "./templates/_body.html";

function scaffold(layout, body, lesson, i) {
  const folder = join(cwd(), ROOT, i.toString());
  const pathToBody = join(folder, "body.html");
  const pathToFile = join(folder, "index.html");

  lesson.i = i;

  const folderExists = exists(folder);
  const bodyExists = folderExists && exists(pathToBody);

  if (!folderExists) {
    mkdirSync(folder);
  }

  // always regenerate index.html for consistency
  const indexHtml = render(layout, lesson);
  writeFile(pathToFile, indexHtml);

  // don't regenerate body if it already in place
  if (!bodyExists) {
    const bodyHtml = render(body, lesson);
    writeFile(pathToBody, bodyHtml);
  }
}

(function cli([lessonNumber = -1]) {
  const layout = readFile(LAYOUT);
  const body = readFile(BODY);
  const lesson = course.lessons[lessonNumber];
  if (lesson) {
    scaffold(layout, body, lesson, lessonNumber);
  } else {
    course.lessons.forEach((lesson, index) =>
      scaffold(layout, body, lesson, index)
    );
  }
})(process.argv.splice(2));
