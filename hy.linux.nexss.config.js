let languageConfig = Object.assign({}, require("./hy.win32.nexss.config"));
const os = require(`${process.env.NEXSS_SRC_PATH}/node_modules/@nexssp/os/`);
const distName = os.name();
languageConfig.dist = distName;

const sudo = os.sudo();

languageConfig.compilers = {
  hy: {
    install: `${sudo}apt-get install -y python3
${sudo}apt-get install python3-pip
${sudo}python3 -m pip install hy`,
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
  case os.distros.UBUNTU:
    languageConfig.compilers.hy.install = os.replacePMByDistro(
      `${sudo}apt install -y python3-dev && ` +
        languageConfig.compilers.hy.install
    );
    break;
  default:
    languageConfig.compilers.hy.install = os.replacePMByDistro(
      languageConfig.compilers.hy.install
    );
    break;
}

module.exports = languageConfig;
