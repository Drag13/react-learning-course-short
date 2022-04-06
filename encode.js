const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

(function name(params) {
  const filePath = params[0] ?? `./sample.tsx`;
  const fullPath = join(__dirname, filePath);
  const file = readFileSync(fullPath, { encoding: "utf-8" });
  const text = file.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  const result = `<pre><code data-line-numbers>
${text}
</code></pre>`
  writeFileSync("test.txt", result, { encoding: "utf-8" });
})(process.argv.splice(2));
