module.exports = {
  ...require("@haydenull/fabric/prettier"),
  // docs: https://github.com/tailwindlabs/prettier-plugin-tailwindcss#sorting-classes-in-function-calls
  tailwindConfig: '.your-path/tailwind.config.js',
  tailwindFunctions: [], // ['cn', 'clsx']
}