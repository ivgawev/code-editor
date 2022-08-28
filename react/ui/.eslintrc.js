const web = require("@configurations/eslint/eslint.web");

module.exports = {
      ...web,

      rules: {
            ...web.rules,
            "@typescript-eslint/no-non-null-assertion": 0,
            "@typescript-eslint/restrict-template-expressions": 0
      },

      // PARSER
      parserOptions: {
            project: "react/ui/tsconfig.json"
      }
};
