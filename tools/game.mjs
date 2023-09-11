import { loadCSV, save, smartMask, splitBySum } from './game.tools.mjs';

const mapToUser = (input) => {
  return {
    sum: +input.Sum,
    name: input.Name,
  };
};

(async function () {
  const data = await loadCSV('./input.csv', mapToUser, {
    separator: ';',
    filter: ({ name }) => !!name,
  });
  const masked = data.map((x) => ({ ...x, name: smartMask(3, x.name) }));
  const list = splitBySum(50, 'sum', masked);
  save('res.txt', list);
})();
