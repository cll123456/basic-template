// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
	root: true,
	env: {
		'vue/setup-compiler-macros': true,
		node: true
	},
	plugins: [ '@typescript-eslint', 'prettier' ],
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		sourceType: 'module',
		parser: '@typescript-eslint/parser',
		ecmaVersion: 2021
	},
	rules: {
		// 要求使用 ===和 !==
		eqeqeq: [ 'warn', 'always', { null: 'never' } ],
		'no-debugger': [ 'error' ],
		'no-empty': [ 'warn', { allowEmptyCatch: true } ],
		'no-process-exit': 'off',
		'no-useless-escape': 'off',
		'prefer-const': [
			'warn',
			{
				destructuring: 'all'
			}
		],

		'node/no-deprecated-api': 'off',
		'node/no-unpublished-import': 'off',
		'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    "node/no-missing-import": ["error", {
      "allowModules": [],
      "resolvePaths": ["/packages/**"],
      "tryExtensions": [".js", ".json", ".ts", ]
     }],

		'vue/script-setup-uses-vars': 'error',
		'vue/singleline-html-element-content-newline': [
			'off',
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: [ 'pre', 'textarea' ]
			}
    ],
    "vue/max-attributes-per-line": ["off", {
      "singleline": {
        "max": 1
      },      
      "multiline": {
        "max": 1
      }
    }],
		'vue/comment-directive': 'off',

		'@typescript-eslint/ban-ts-comment': 'off', // TODO: we should turn this on in a new PR
		'@typescript-eslint/ban-types': 'off', // TODO: we should turn this on in a new PR
		'@typescript-eslint/no-empty-function': [ 'error', { allow: [ 'arrowFunctions' ] } ],
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off', // maybe we should turn this on in a new PR
		'@typescript-eslint/no-extra-semi': 'off', // conflicts with prettier
		'@typescript-eslint/no-inferrable-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off', // maybe we should turn this on in a new PR
		'@typescript-eslint/no-unused-vars': 'off', // maybe we should turn this on in a new PR
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/consistent-type-imports': [ 'error', { prefer: 'type-imports' } ]
	},
	overrides: [
		{
			files: [ 'packages/create-basic-template/**', 'packages/vue-plugins/**' ],
			rules: {
				'node/no-extraneous-import': 'off',
				'node/no-extraneous-require': 'off'
			}
		},
		{
			files: [ 'packages/create-basic-template/template-*/**' ],
			rules: {
				'node/no-missing-import': 'off'
			}
		},
		{
			files: [ '*.js' ],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off'
			}
		},
		{
			files: [ '*.d.ts' ],
			rules: {
				'@typescript-eslint/triple-slash-reference': 'off'
			}
		}
	]
});
