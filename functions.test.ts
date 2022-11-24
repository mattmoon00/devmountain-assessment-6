const { shuffleArray } = require("./utils");

const testData = {
  array: [1, 2, 3],
};

describe("shuffleArray should", () => {
  test("return an array", () => {
    const shuffledArray = shuffleArray(testData.array);

    expect(typeof shuffledArray).toBe("object");
  });

  test("have same length", () => {
    const shuffledArray = shuffleArray(testData.array);
    expect(shuffledArray.length).toBe(testData.array.length);
  });
});
