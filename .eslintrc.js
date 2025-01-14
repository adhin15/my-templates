const OFF = 0; // Turn the rule off
const WRN = 1; // Turn the rule on as a warning (doesn't affect exit code)
const ERR = 2; // Turn the rule on as an error (exit code will be 1)

module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "@stylistic", "@stylistic/js", "@typescript-eslint", "import-newlines", "sort-keys-fix"],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    "@next/next/no-img-element": OFF,
    "@stylistic/js/arrow-spacing": [ERR, { after: true, before: true }],
    "@stylistic/space-infix-ops": [ERR, { int32Hint: false }],
    "@typescript-eslint/consistent-type-imports": ERR,
    "@typescript-eslint/indent": [ERR, 2, { SwitchCase: 1 }],
    "@typescript-eslint/member-delimiter-style": WRN,
    "@typescript-eslint/type-annotation-spacing": ERR,
    "array-bracket-spacing": [ERR, "never"],
    "array-element-newline": [ERR, "consistent"],
    "arrow-parens": [ERR, "always"],
    "comma-dangle": [
      ERR,
      {
        arrays: "only-multiline",
        exports: "always-multiline",
        functions: "only-multiline",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "comma-spacing": [ERR, { after: true, before: false }],
    "eol-last": [WRN, "always"],
    eqeqeq: WRN,
    "import-newlines/enforce": [
      ERR,
      {
        items: 4,
        "max-len": 120,
        semi: true,
      },
    ],
    "import/named": OFF,
    "import/newline-after-import": [ERR, { count: 2 }],
    "import/no-anonymous-default-export": OFF,
    "import/no-named-as-default-member": OFF,
    "import/no-unresolved": OFF,
    "import/order": [
      WRN,
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
          orderImportKind: "asc",
        },
        distinctGroup: true,
        groups: ["external", "internal", "parent", "sibling", "type"],
        "newlines-between": "always",
        pathGroups: [
          {
            group: "external",
            pattern: "react",
            position: "before",
          },
          {
            group: "internal",
            pattern: "@/components/**",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "type"],
      },
    ],
    "jsx-quotes": [ERR, "prefer-double"],
    "key-spacing": [ERR, { beforeColon: false }],
    "keyword-spacing": [ERR, { after: true }],
    "max-len": [ERR, { code: 120, ignoreRegExpLiterals: true, ignoreStrings: true }],
    "no-alert": OFF,
    "no-console": OFF,
    "no-multi-spaces": [ERR],
    "no-multiple-empty-lines": [WRN, { max: 2, maxBOF: 0, maxEOF: 0 }],
    "no-trailing-spaces": ERR,
    "object-curly-spacing": [
      ERR,
      "always",
      {
        arraysInObjects: false,
        objectsInObjects: true,
      },
    ],
    "prettier/prettier": OFF,
    quotes: [ERR, "single"],
    "react-hooks/exhaustive-deps": OFF,
    "react/function-component-definition": [
      ERR,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-closing-bracket-location": [WRN, "line-aligned"],
    "react/jsx-closing-tag-location": ERR,
    "react/jsx-curly-brace-presence": ERR,
    "react/jsx-filename-extension": [WRN, { extensions: [".tsx", ".jsx"] }],
    "react/jsx-first-prop-new-line": [ERR, "multiline"],
    "react/jsx-fragments": ERR,
    "react/jsx-indent": [ERR, 2],
    "react/jsx-max-props-per-line": [WRN, { maximum: 1, when: "multiline" }],
    "react/jsx-tag-spacing": [
      ERR,
      {
        afterOpening: "never",
        beforeClosing: "allow",
        beforeSelfClosing: "always",
        closingSlash: "never",
      },
    ],
    "react/no-unescaped-entities": OFF,
    "react/prop-types": OFF,
    "react/react-in-jsx-scope": OFF,
    semi: [WRN, "always"],
    "sort-keys": [ERR, "asc", { caseSensitive: true, minKeys: 2 }],
    "sort-keys-fix/sort-keys-fix": ERR,
    "space-before-blocks": [ERR, "always"],
    "space-before-function-paren": [ERR, { asyncArrow: "always", named: "never" }],
    "space-in-parens": [ERR, "never"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};