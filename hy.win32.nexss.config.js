// must be here for unicode !!!!
process.env.PYTHONIOENCODING = "UTF-8";
// process.env.PYTHONOPTIMIZE = 1;

let languageConfig = Object.assign(
  {},
  require(`../config.${process.platform}`)
);
languageConfig.title = "Hy";
languageConfig.description = "Hy is a Lisp dialect that’s embedded in Python";
languageConfig.url = "https://docs.hylang.org";
languageConfig.founders = ["Paul Tagliamonte"];
languageConfig.developers = ["Core team"];
languageConfig.years = ["2013"];
languageConfig.extensions = [".hy"];
languageConfig.compilers = {
  coconut: {
    install: "scoop install python & python -m pip install hy",
    command: "hy",
    args: "<file>",
    help: ``,
  },
};
languageConfig.errors = require("./nexss.hy.errors");
languageConfig.languagePackageManagers = {
  pip3: {
    installation: "scoop install python",
    messageAfterInstallation: "", //this message will be displayed after this package manager installation, maybe some action needed etc.
    req: "python3 -m pip install -r requirements.txt",
    freeze: "python3 -m pip freeze > requirements.txt",
    installed: "python3 -m pip list",
    search: "python3 -m pip search",
    install: "python3 -m pip install",
    uninstall: "python3 -m pip remove",
    help: "python3 -m pip",
    version: "python3 -m pip --version",
    init: () => {},
    // if command not found in specification
    // run directly on package manager
    else: "pip3",
  },
};

module.exports = languageConfig;
