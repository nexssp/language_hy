let languageConfig = Object.assign({}, require("./hy.win32.nexss.config"));
const os = require("@nexssp/os");

const sudo = os.sudo();
const distName = os.name();

languageConfig.dist = distName;
languageConfig.compilers = {
  hy: {
    install: `${sudo}brew install -y python
${sudo}python -m pip install hy`,
    command: "hy",
    args: "<file>",
    help: ``,
  },
};

module.exports = languageConfig;
