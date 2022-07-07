const time = require("./timeconversion");

describe("Test cases for converting time to string", () => {
  test("Getting Minutes as a result", () => {
    expect(time(180000)).toBe("3 minutes");
  });
  test("Getting minutes and seconds as a result", () => {
    expect(time(200000)).toBe("3 minutes 20 seconds");
  });
  test("Getting only seconds as a result", () => {
    expect(time(5200)).toBe("5 seconds");
  });
  test("Getting Singular minute as a result", () => {
    expect(time(60000)).toBe("1 minute");
  });
});
