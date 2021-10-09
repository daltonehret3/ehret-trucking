module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
    plugins: [['styled-components', {'ssr': true}], "@babel/plugin-transform-runtime"]
};