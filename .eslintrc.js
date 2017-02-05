module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true,
    },
    "globals": {
        "fetch": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
    },
    "rules": {
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1,
            },
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "quotes": [
            "error",
            "single",
        ],
        "semi": [
            "error",
            "always",
        ],
    }
};