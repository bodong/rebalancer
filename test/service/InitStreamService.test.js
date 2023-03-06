import { initStream } from "../../src/service/InitStreamService";
import { getAllMedia } from "../../src/service/SearchMediaService";

test("it should not initiate with empty data set", () => {
  const budget = 1000;
  expect(() => {
    initStream(budget, []);
  }).toThrow();
});

test("it should not initiate with bad data set", () => {
  const budget = 1000;
  expect(() => {
    initStream(budget, { test: 123 });
  }).toThrow();
});

test("it should not initiate with negative budget", () => {
  const budget = -1000;
  expect(() => {
    initStream(budget, getAllMedia());
  }).toThrow();
});

test("it should initiate the budget allocation evenly", () => {
  const budget = 1000;
  const medias = getAllMedia();
  initStream(budget, medias);
  expect(medias).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        amount: 500,
      }),
    ])
  );
});
