// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require("jasmine-spec-reporter");

exports.config = {
  allScriptsTimeout: 5000,
  specs: ["./src/**/*.e2e-spec.ts"],
  // capabilities: {
  //   browserName: "chrome",
  // },
  multiCapabilities: [
    {
      browserName: "chrome",
    },
    {
      browserName: "firefox",
    },
    {
      browserName: "opera",
    },
  ],
  directConnect: false,
  seleniumAddress: "http://172.27.241.163:30393/wd/hub",
  getPageTimeout: 5000,
  framework: "jasmine",
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 5000,
    print: function () {},
  },
  onPrepare() {
    require("ts-node").register({
      project: require("path").join(__dirname, "./tsconfig.e2e.json"),
    });

    require("zone.js/dist/zone");
    require("zone.js/dist/async-test.js");
    require("zone.js/dist/proxy.js");

    jasmine
      .getEnv()
      .addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
};
