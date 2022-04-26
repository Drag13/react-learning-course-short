const { exec } = require("child_process");
const { join } = require("path");
const course = require("../course.json");

(function cli(params) {
  const [lessonNumber] = params;
  const lesson =
    course.lessons[+lessonNumber] ??
    course.lessons.find((x) => x.name === lessonNumber);

  if (!lesson) {
    console.log(`Lesson with number #${lessonNumber} doesn't exist, aborting`);
    return;
  }

  const sub = lesson.name;

  console.log(`Starting ${sub} presentation`);

  const path = join(__dirname, "presentations", sub, "index.html");
  exec(`npx parcel ${path}`);
})(process.argv.splice(2));
