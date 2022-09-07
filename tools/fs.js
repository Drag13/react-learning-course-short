const { readFileSync, writeFileSync, existsSync } = require('fs');

const writeFile = (path, data) => writeFileSync(path, data, { encoding: 'utf-8' });

const readFile = (path) => readFileSync(path, { encoding: 'utf-8' });

const exists = (path) => existsSync(path);

const ensureExists = (path) => {
  if (exists(path)) {
    return;
  }
  throw new Error(`File: "${path}" not exists`);
};

module.exports = {
  writeFile,
  readFile,
  exists,
  ensureExists,
};
