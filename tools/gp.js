const { render } = require("mustache");
const { join } = require("path");
const { readFile, writeFile, exists } = require("./fs");
const { cwd } = require("process");
const { mkdirSync } = require("fs");
const course = require("../course.json");

const ROOT = "./presentations";
const TEMPLATE = "./templates/_index.html";

const fromIndex = (i) => join(cwd(), ROOT, i.toString(), "index.html");

course.lessons.forEach((lesson, i) => {
  const pathToFile = fromIndex(i);
  const template = readFile(TEMPLATE);

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
});
