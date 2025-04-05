const { override, useBabelRc } = require("customize-cra");
const path = require("path");

module.exports = function override(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        "~": path.resolve(__dirname, "src"),
    };
    return config;
};

module.exports = override(useBabelRc());
