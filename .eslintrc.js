module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "eslint-config-prettier"
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["@typescript-eslint"],
    rules: {
        indent: [
            "error",
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1,
                ArrayExpression: 1,
                CallExpression: {
                    arguments: "first"
                },
                FunctionDeclaration: {
                    parameters: "first"
                },
                FunctionExpression: {
                    parameters: "first"
                },
                offsetTernaryExpressions: true
            }
        ],
        quotes: [2, "double"],
        "@typescript-eslint/ban-types": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "no-case-declarations": 0,
        "no-debugger": 0,
        "no-console": 0,
        "eol-last": 2,
        semi: 2,
        eqeqeq: 2,
        "no-unused-vars": 2,
        "keyword-spacing": 2,
        "space-infix-ops": 2,
        "comma-spacing": 2,
        "brace-style": 2,
        "handle-callback-err": 2,
        "no-undef": 2,
        "no-multiple-empty-lines": 2,
        "operator-linebreak": 2,
        "block-spacing": 2,
        "comma-dangle": 2,
        "comma-style": 2,
        "dot-location": [2, "property"],
        "func-call-spacing": 2,
        "key-spacing": 2,
        "no-class-assign": 2,
        "no-constant-condition": 2,
        "no-dupe-args": 2,
        "no-dupe-class-members": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-duplicate-imports": 2,
        "no-extra-parens": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-global-assign": 2,
        "no-obj-calls": 2,
        "no-implicit-globals": 2
    }
};
