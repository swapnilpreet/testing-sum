const sumab = require("./sum");

describe("Testing sum function", () => {
  test("Adding two string numbers where the result is integer", () => {
    expect(sumab("1", "2")).toBe(3);
  });
  test("Calling sum with no arguments", () => {
    expect(sumab()).toBe("Sum invoked with no arguments");
  });
  test("Calling sum with one argument", () => {
    expect(sumab(1)).toBe("Sum function needs atleast 2 arguments");
  });
  test("Adding 3 numbers", () =>{
    expect(sumab(1, 2, 3)).toBe(6);
  });
  test("Adding 1 + 2 = 3", () => {
    expect(sumab(1, 2)).toBe(3);
  });
  test("Adding two negative numbers", () => {
    expect(sumab(-1, -2)).toBe(-3);
  });
  test("Adding two float numbers where the result is integer", () => {
    expect(sumab(1.5, 1.5)).toBe(3);
  });
});
