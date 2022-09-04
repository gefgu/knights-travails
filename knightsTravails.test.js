import knightMoves from "./knightsTravails";

test("Knigth moves - 2", () => {
  expect(knightMoves([0, 0], [1, 2])).toStrictEqual([
    [0, 0],
    [1, 2],
  ]);
});

test("Knigth moves - 3", () => {
  expect(knightMoves([0, 0], [3, 3])).toStrictEqual([
    [0, 0],
    [1, 2],
    [3, 3],
  ]);
});

test("Knigth moves - 3 reverse", () => {
  expect(knightMoves([3, 3], [0, 0])).toStrictEqual([
    [3, 3],
    [2, 1],
    [0, 0],
  ]);
});

test("Knigth moves - 4", () => {
  expect(knightMoves([3, 3], [4, 3])).toStrictEqual([
    [3, 3],
    [1, 2],
    [2, 4],
    [4, 3],
  ]);
});
