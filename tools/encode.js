const { readFile, writeFile } = require("./fs");
const { join } = require("path");

(function name(params) {
  const filePath = params[0] ?? `../sample.tsx`;
  const fullPath = join(__dirname, filePath);
  const file = readFile(fullPath);
  const text = file.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const result = `<pre><code data-line-numbers>
${text}
</code></pre>`;
  writeFile("test.txt", result);
})(process.argv.splice(2));
