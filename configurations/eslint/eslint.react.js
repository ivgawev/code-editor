module.exports = {
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      plugins: ["react", "react-hooks"],

      rules: {
            "react/jsx-wrap-multilines": [2, { return: "parens-new-line" }],
            "react/prop-types": 0,
            "react/react-in-jsx-scope": 0,
            "react-hooks/exhaustive-deps": 0
      }
};
