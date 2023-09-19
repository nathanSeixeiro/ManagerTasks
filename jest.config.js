module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/__test__'], 
    testEnvironment: 'node',
    transform: {
      '.+\\.ts$': 'ts-jest',
    },
    moduleNameMapper: {
      '^@/(.*)': '<rootDir>/src/$1',
    },
  }
  