module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.test.ts", "**/*.spec.ts"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
};
