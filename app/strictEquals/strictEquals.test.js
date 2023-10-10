import strictEquals from "./strictEquals";

describe("Given a strictEquals function", () => {
  describe("when it recives 1 and 1", () => {
    test("then it should return true", () => {
      const valueA = 1;
      const valueB = 1;
      const expectedResult = true;

      const hasEqualsValues = strictEquals(valueA, valueB);

      expect(hasEqualsValues).toBe(expectedResult);
    });
  });

  describe("when it recives NaN and NaN", () => {
    describe("then it should return false", () => {
      const valueA = 1;
      const valueB = 1;
      const expectedResult = false;

      const hasEqualsValues = strictEquals(valueA === valueB);

      expect(hasEqualsValues).toBe(expectedResult);
    });
  });
});
