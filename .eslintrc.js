module.exports = {
  "rules": {
    "indent": [2, 2, {"SwitchCase": 1}],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "eol-last": 1,
    "no-unused-expressions": 0,
    "no-unused-vars": 0,
    "no-console": 0
  },
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "expect": true
  },
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "modules": true,
    "experimentalObjectRestSpread": true
  },
  "plugins": [
    "react"
  ]
};
