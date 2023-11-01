module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'plugin:vue/vue3-essential',
	overrides: [],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			modules: true,
		},
	},
	plugins: ['vue'],
	rules: {},
}
