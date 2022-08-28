module.exports = {
      extends: ["standard-with-typescript"],

      rules: {
            // ESLINT
            quotes: "off",
            semi: "off",

            // TYPESCRIPT
            "@typescript-eslint/consistent-type-assertions": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/indent": ["error", 6],
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/promise-function-async": "off",
            "@typescript-eslint/semi": ["error", "always"],
            "@typescript-eslint/strict-boolean-expressions": "off"
      }
};
