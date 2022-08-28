const base = require("./eslint.base");
const typescript = require("./eslint.typescript");
const react = require("./eslint.react");

module.exports = {
      extends: [...typescript.extends, ...react.extends],

      rules: {
            ...base.rules,
            ...typescript.rules,
            ...react.rules
      }
};
