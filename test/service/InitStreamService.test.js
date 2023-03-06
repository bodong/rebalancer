import initStream from "../../src/service/InitStreamService.js";
import { getAllMedia, init } from "../../src/service/DataMediaService.js";
import initializeData from "../../src/data/MockData.js";

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
  const budget = 10000;

  init(initializeData());
  const medias = getAllMedia();

  initStream(budget, medias);
  expect(medias).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        amount: 5000,
      }),
    ])
  );
});
