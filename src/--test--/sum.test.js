import Sum from "../components/Sum";

test("should give sume of two number", () => {
  const result = Sum(3, 4);

  expect(result).toBe(7);
});
