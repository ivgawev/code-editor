module.exports = {
      ...require("@configurations/eslint/eslint.node"),

      // PARSER
      parserOptions: {
            project: "shared/helpers/tsconfig.json"
      }
};
