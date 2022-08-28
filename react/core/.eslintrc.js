const web = require("@configurations/eslint/eslint.web");

module.exports = {
      ...web,

      rules: {
            ...web.rules,
            "@typescript-eslint/restrict-template-expressions": 0
      },

      // PARSER
      parserOptions: {
            project: "react/core/tsconfig.json"
      }
};
