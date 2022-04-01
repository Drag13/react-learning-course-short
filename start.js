const { exec } = require("child_process");
const { join } = require("path");

(function cli(params) {
  const [lessonNumber] = params;
  const path = join(__dirname, "presentations", lessonNumber, "index.html");
  exec(`npx parcel ${path}`);
})(process.argv.splice(2));
