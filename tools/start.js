const { exec } = require('child_process');
const { join } = require('path');
const { cwd } = require('process');
const course = require('../course.json');
const PORT = process.env.PORT ?? '1234';

(function cli(params) {
  const [lessonNumber] = params;

  if (lessonNumber == undefined) {
    console.log('Please, specify lesson name to start first');
    console.log('Available lessons are: ');
    course.lessons.map((l) => l.name).forEach((name) => console.log(name));
    return;
  }

  const lesson =
    course.lessons[+lessonNumber] ?? course.lessons.find((x) => x.name === lessonNumber);

  if (!lesson) {
    console.log(`Lesson with number #${lessonNumber} doesn't exist, aborting`);
    return;
  }

  const sub = lesson.name;

  console.log(`Starting ${sub} presentation`);

  const path = join(cwd(), 'presentations', sub, 'index.html');
  console.log(`Starting developer server on http://localhost:${PORT}`);
  exec(`npx parcel ${path}`);
})(process.argv.splice(2));
