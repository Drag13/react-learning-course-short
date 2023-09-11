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

/**
 *
 * @param {number} maxSymbols
 * @param {string} input
 * @returns {string}
 */
export function maskString(maxSymbols, input) {
  const { length } = input;
  return maxSymbols > length
    ? `${input.slice(0, length)}****`
    : `${input.slice(0, maxSymbols)}****`;
}

/**
 *
 * @param {number} maxSymbols
 * @param {string} input
 * @param {number} boundary
 */
export function smartMask(maxSymbols, input) {
  const fio = input.split(/\s+/);
  const hasNameAndSecondName = fio.length > 1;
  if (hasNameAndSecondName) {
    return `${fio[0]} ${maskString(maxSymbols, fio[1])}`;
  }

  return maskString(maxSymbols, fio[0]);
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
