const { ensureExists, readFile, writeFile } = require('./fs');
const { render } = require('mustache');

(function main(inputFileName, templateFileName, outputTo) {
  ensureExists(inputFileName);
  ensureExists(templateFileName);
  const template = readFile(templateFileName);
  const scheduleRaw = readFile(inputFileName);
  const scheduleJSON = JSON.parse(scheduleRaw);
  const schedule = createSchedule(scheduleJSON.lessons);
  const program = render(template, schedule);
  writeFile(outputTo, program);

  function createSchedule(lessons) {
    return lessons.reduce((acc, { week, day, slot, title }) => {
      let w = acc.find((savedWeek) => savedWeek.index === week);
      if (!w) {
        w = { index: week };
        acc.push(w);
      }

      const key = `day${day}`;
      const d = w[key] ?? [];
      d.push({ time: `${9 + slot}:00`, title });
      w[key] = d;
      return acc;
    }, []);
  }
})('./course.v2.json', './templates/_programv2.md', 'PROGRAMV2.md');
