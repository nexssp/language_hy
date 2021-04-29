let languageConfig = Object.assign({}, require("./hy.win32.nexss.config"));

const sudo = process.sudo;

const distName = process.distro;
languageConfig.dist = distName;

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
  case process.distros.ALPINE:
    languageConfig.compilers.hy.install = process.replacePMByDistro(
      `${sudo}apt install -y musl-dev py3-pip python3-dev && ${sudo}pip3 install hy`
    );
    break;
  // case os.distros.ARCH:
  //   languageConfig.compilers.hy.install =
  //     "pacman -S --noconfirm python & python -m pip install hy"; // error: package org.json does not exist
  //   break;
  case process.distros.UBUNTU:
    languageConfig.compilers.hy.install = process.replacePMByDistro(
      `${sudo}apt install -y python3-dev && ` +
        languageConfig.compilers.hy.install
    );
    break;
  default:
    languageConfig.compilers.hy.install = process.replacePMByDistro(
      languageConfig.compilers.hy.install
    );
    break;
}

module.exports = languageConfig;
