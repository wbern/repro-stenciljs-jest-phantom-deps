import { hello } from "./index";

describe("call fn", () => {
  it("should return world", () => {
    expect(hello()).toBe("world");
  });
});
