const { exec } = require('child_process');
const { join } = require('path');
const { cwd } = require('process');
const course = require('../course.json');
const PORT = process.env.PORT ?? '1234';

(function cli(params) {
  const [lessonNumber] = params;

  if (lessonNumber == undefined) {
    console.log('\x1b[33m%s\x1b[0m', 'Please, specify lesson name to start first');
    return logAvailableLessonNames(course.lessons);
  }

  const lesson =
    course.lessons[+lessonNumber] ?? course.lessons.find((x) => x.name === lessonNumber);

  if (!lesson) {
    console.log('\x1b[33m%s\x1b[0m', `Lesson "${lessonNumber}" doesn't exist, aborting`);
    return logAvailableLessonNames(course.lessons);
  }

  const sub = lesson.name;

  console.log(`Starting ${sub} presentation`);

  const path = join(cwd(), 'presentations', sub, 'index.html');
  console.log(`Starting developer server on http://localhost:${PORT}`);
  exec(`npx parcel ${path}`);

  /**
   * Logs all lesson names available to start
   * @param {[{name:string}]} lessons
   */
  function logAvailableLessonNames(lessons) {
    console.log('Available lessons are: ');
    lessons.map((l) => l.name).forEach((name) => console.log(name));
  }
})(process.argv.splice(2));
