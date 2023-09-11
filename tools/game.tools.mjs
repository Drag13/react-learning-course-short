import { createReadStream, existsSync, writeFileSync } from 'fs';
import csv from 'csv-parser';

const writeFile = (path, data) => writeFileSync(path, data, { encoding: 'utf-8' });

const exists = (path) => existsSync(path);

const ensureExists = (path) => {
  if (exists(path)) {
    return;
  }
  throw new Error(`File: "${path}" not exists`);
};

/**
 * @param {string} fileName
 * @param {()=> T} mapper
 * @param {{separator?:string, filter: (v:T)=> boolean}} param2
 * @returns {Promise<T[]>}
 */
export function loadCSV(fileName, mapper, { separator = ',', filter } = {}) {
  ensureExists(fileName);

  const resultPromise = new Promise((res) => {
    const results = [];
    createReadStream(fileName)
      .pipe(csv({ separator }))
      .on('data', (data) => results.push(mapper(data)))
      .on('end', () => {
        const finalList = typeof filter === 'function' ? results.filter(filter) : results;
        res(finalList);
      });
  });
  return resultPromise;
}

export function maskString(maxSymbols, input) {
  return `${input.slice(0, maxSymbols)}****`;
}

/**
 *
 * @param {number} maxSymbols
 * @param {number} input
 */
export function smartMask(maxSymbols, input, boundary = 1) {
  const { length } = input;
  const max = maxSymbols > length - boundary ? length - boundary - 1 : maxSymbols;
  return maskString(max, input);
}

export function splitBySum(sum = 50, fieldName = 'sum', arr) {
  return arr
    .map((x) => {
      const n = Math.floor(x[fieldName] / sum);
      return new Array(n).fill(x);
    })
    .flat();
}

export function save(path, data) {
  const text = data.map((x) => `${x.name}:${x.sum}`).join('\n');
  writeFile(path, text);
}

export function normalizeFirstSymbol(fileName) {
  const file = readFileSync(fileName, { encoding: 'utf-8' });
  const fixed = file.substring(1);
  writeFileSync(fileName, fixed);
}
