var exec = require("child_process").exec;
var fs = require("fs");

const ERROR_FILE_TEMPLATE = `
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="jest tests" tests="1" failures="1" time="$time">
  <testsuite name="Default Suite" errors="1" failures="1" skipped="0" timestamp="$timestamp" time="$time" tests="1">
    <testcase classname="Default Suite $name" name="Default Suite visit-angular-repo" time="$time">
    </testcase>
  </testsuite>
</testsuites>
`;

const beginAt = Date.now;

// Notice how your arguments are in an array of strings
var child = exec("npm run side-test", (err, stdout, stderr) => {
  console.log(err, stderr, stdout);
});

child.on("message", (msg) => {
  console.info("SIDE PROCESS: ", msg);
});

child.on("error", (error) => {
  console.log("SIDE PROCESS encountered error: ", error);

  const $time = (Date.now - beginAt) / 1000 + "s";
  fs.writeFileSync("./side-process-error.xml", getErrorXml({ $time }));
});

function getErrorXml({ $time }) {
  return ERROR_FILE_TEMPLATE.replace(/^\$time/gi, $time).replace(
    /^\$timestamp/gi,
    new Date().toUTCString()
  );
}
