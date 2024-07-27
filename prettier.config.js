/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    trailingComma: 'es5',
    tabWidth: 4,
    singleQuote: true,
    printWidth: 80,
    semi: true,
    importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-organize-imports',
        'prettier-plugin-tailwindcss',
    ],
};

export default config;
