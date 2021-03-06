module.exports = {
    "env": {
        "browser": true,
        "node": true,
    },
    "globals": {
      "chai": true,
      "sinon": true,
      "describe": true,
       "it": true,
        "beforeEach": true,
        "afterEach": true,
        "$": true,
        "BrumJS": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
