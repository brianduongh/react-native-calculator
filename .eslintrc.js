module.exports = {
  "env": {
      "node": true,
      "browser": true,
      "es6": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
  "prop-types": 0,
  "jsx-one-expression-per-line": 0,
  "function-paren-newline": [2, "consistent"],
  "import/extensions": 0,
  "import/no-named-as-default": 0,
  "import/prefer-default-export": 0,
  "jsx-a11y/no-static-element-interactions": 0,
  "max-len": 0,
  "no-underscore-dangle": 0,
  "no-plusplus": [
    2,
    {
      "allowForLoopAfterthoughts": true
    }
  ],
  "object-curly-newline": [2, { "consistent": true }],
  "react/forbid-prop-types": 1,
  "react/prefer-stateless-function": [
    0,
    {
      "ignorePureComponents": true
    }
  ],
  "react/jsx-filename-extension": [
    1,
    {
      "extensions": [
        ".js",
        ".jsx"
      ]
    }
  ]
}
};
