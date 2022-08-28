const base = require("./eslint.base");
const typescript = require("./eslint.typescript");

module.exports = {
      extends: [...typescript.extends],

      rules: {
            ...base.rules,
            ...typescript.rules
      }
};
