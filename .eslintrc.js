module.exports = {
    "env": {
        "browser": true,
        "node": true,
    },
    "globals": {
      "describe": true,
       "it": true,
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
