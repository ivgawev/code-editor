module.exports = {
      ...require("@configurations/eslint/eslint.node"),

      // PARSER
      parserOptions: {
            project: "shared/design-system/tsconfig.json"
      }
};
