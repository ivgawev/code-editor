const web = require("@configurations/eslint/eslint.web");

module.exports = {
      ...web,

      rules: {
            ...web.rules,
            "@typescript-eslint/restrict-plus-operands": 0,
            "@typescript-eslint/restrict-template-expressions": 0
      },

      // PARSER
      parserOptions: {
            project: "clients/code-editor/tsconfig.json"
      }
};
