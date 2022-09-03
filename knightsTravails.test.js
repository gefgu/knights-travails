import knightMoves from "./knightsTravails";

test("Knigth moves - only 1", () => {
  expect(knightMoves([0, 0], [1, 2])).toStrictEqual([
    [0, 0],
    [1, 2],
  ]);
});

test("Knigth moves - 2", () => {
  expect(knightMoves([0, 0], [3, 3])).toStrictEqual([
    [0, 0],
    [1, 2],
    [3, 3],
  ]);
});

test("Knigth moves - 2 reverse", () => {
  expect(knightMoves([3, 3], [0, 0])).toStrictEqual([
    [3, 3],
    [1, 2],
    [0, 0],
  ]);
});
