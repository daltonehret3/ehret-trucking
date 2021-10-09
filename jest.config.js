module.exports = {
    collectCoverageFrom: [
        '**/src/**/*.js',
        '**/src/**/*.jsx',
        '**/src/**/*.ts',
        '**/src/**/*.tsx',
        '**/pages/**/*.ts',
        '**/pages/**/*.tsx',
        '!**/src/*.js'
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    coverageReporters: ['lcov', 'text', 'html', 'json'],
    testMatch: [
        '**/test/**/*.spec.js',
        '**/test/**/*.spec.jsx',
        '**/test/**/*.spec.tsx',
        '**/test/**/*.spec.ts'
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        'ts',
        'tsx',
        "json",
        "node"
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/assetsTransformer.js", "\\.(css|less)$": "<rootDir>/assetsTransformer.js"
    }
};