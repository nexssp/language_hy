let languageConfig = Object.assign({}, require("./hy.win32.nexss.config"));
const os = require("@nexssp/os");

const sudo = os.sudo();
const distName = os.name();

languageConfig.dist = distName;
languageConfig.compilers = {
  hy: {
    install: `${sudo}apt-get install -y python
${sudo}python -m pip install hy`,
    command: "hy",
    args: "<file>",
    help: ``,
  },
};

switch (distName) {
  // case os.distros.ARCH:
  //   languageConfig.compilers.hy.install =
  //     "pacman -S --noconfirm python & python -m pip install hy"; // error: package org.json does not exist
  //   break;
  default:
    languageConfig.compilers.hy.install = os.replacePMByDistro(
      languageConfig.compilers.hy.install
    );
    break;
}

module.exports = languageConfig;
