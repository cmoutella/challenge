module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/next/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.js']
}
