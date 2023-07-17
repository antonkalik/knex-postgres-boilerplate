module.exports = {
  clearMocks: true,
  transform: {
    '^.+\\.js?$': 'babel-jest',
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  coverageDirectory: 'coverage',
  verbose: true,
  testURL: 'http://localhost/',
  testEnvironment: 'node',
  modulePaths: ['./'],
  moduleNameMapper: {
    '/^src/(.*)$/': '<rootDir>/src/$1',
  },
};
