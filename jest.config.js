// jest.config.js
export default {
  transform: {
    '^.+\\.[jt]sx?$': ['babel-jest', { configFile: './.babelrc' }],
  },
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx'],
};
