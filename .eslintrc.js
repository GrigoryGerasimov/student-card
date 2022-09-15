module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4, { SwitchCase: 1 }],
        semi: ["error", "always"],
        "space-before-function-paren": [
            "error",
            { anonymous: "never", named: "never" }
        ],
        "multiline-ternary": ["error", "never"],
        "react/display-name": ["off"],
        quotes: ["error", "double", { allowTemplateLiterals: true }]
    }
};
