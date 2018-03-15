module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "jest": true,
        "cypress/globals": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    "plugins": [
        "react",
        "cypress"
    ],
    "rules": {
        "react/prop-types": "off"
    }
};