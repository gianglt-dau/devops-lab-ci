// babel-jest.config.mjs
import babelJest from 'babel-jest';

export default {
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './.babelrc' }],
  },
  extensionsToTreatAsEsm: ['.js'],
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx'],
};
