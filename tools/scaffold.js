const { render } = require("mustache");
const { join } = require("path");
const { readFile, writeFile, exists } = require("./fs");
const { cwd } = require("process");
const { mkdirSync } = require("fs");
const course = require("../course.json");

const ROOT = "./presentations";
const TEMPLATE = "./templates/_index.html";

const fromIndex = (i) => join(cwd(), ROOT, i.toString(), "index.html");

function scaffold(template, lesson, i) {
  const pathToFile = fromIndex(i);
  lesson.i = i;

  if (exists(pathToFile)) {
    console.log(`File ${pathToFile} already exists, skipping...`);
    return;
  }

  console.log(`Generating ${pathToFile} `);

  const folder = join(cwd(), ROOT, i.toString());

  if (!exists(folder)) {
    mkdirSync(join(cwd(), ROOT, i.toString()));
  }

  const result = render(template, lesson);

  writeFile(pathToFile, result);
}

(function cli([lessonNumber = -1]) {
  const template = readFile(TEMPLATE);
  const lesson = course.lessons[lessonNumber];
  if (lesson) {
    scaffold(template, lesson, lessonNumber);
  } else {
    course.lessons.forEach((lesson, index) =>
      scaffold(template, lesson, index)
    );
  }
})(process.argv.splice(2));
