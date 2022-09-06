const { readFile, writeFile } = require('./fs');
const { join } = require('path');

(function main(params) {
  function simplePipe(arg, ...args) {
    return args.reduce((res, f) => f(res), arg);
  }

  function extractName(line, delimiter = ',') {
    return line.split(delimiter)[1];
  }

  function normalizeName(name) {
    return name.replace(/"/g, '').toLowerCase();
  }

  function mask(name) {
    return `***${name.substring(2)}`;
  }

  const pathToFileWithNames = join(__dirname, params[0] ?? `../sample.csv`);
  const pathToOutputFile = join(__dirname, params[0] ?? `../result.txt`);

  const fileWithNames = readFile(pathToFileWithNames);
  const names = fileWithNames
    .split('\n')
    .slice(1)
    .map((n) => simplePipe(n, extractName, normalizeName, mask))
    .join('\r\n');

  writeFile(pathToOutputFile, names);
})(process.argv.splice(2));
