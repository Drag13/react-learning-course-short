const { readFile, writeFile, ensureExists } = require('./fs');
const { join } = require('path');
const { cwd } = require('process');

(function main(params) {
  function simplePipe(arg, ...args) {
    return args.reduce((res, f) => f(res), arg);
  }

  function extractName(line, delimiter = ',') {
    return line.split(delimiter)[1];
  }

  function extractTg(line) {
    return line;
  }

  function normalizeName(name) {
    return name.replace(/"/g, '').toLowerCase();
  }

  function mask(name) {
    return `***${name.substring(2)}`;
  }

  function extractNamesFromGoogleForm(fileWithNames) {
    return fileWithNames
      .split('\n')
      .slice(1)
      .map((n) => simplePipe(n, extractName, normalizeName, mask));
  }

  function extractNamesPlainList(fileWithNames) {
    return fileWithNames.map((n) => simplePipe(n, extractTg, normalizeName, mask));
  }

  const pathToFileWithNames = join(cwd(), params[0] ?? `sample.csv`);
  const pathToOutputFile = join(cwd(), params[1] ?? `result.txt`);

  ensureExists(pathToFileWithNames);
  ensureExists(pathToOutputFile);

  const fileWithNames = readFile(pathToFileWithNames);
  const isGoogleFormsCSV = pathToFileWithNames.endsWith('.csv');

  const names = (
    isGoogleFormsCSV
      ? extractNamesFromGoogleForm(fileWithNames)
      : extractNamesPlainList(fileWithNames)
  ).join('\n');

  writeFile(pathToOutputFile, names);
})(process.argv.splice(2));
