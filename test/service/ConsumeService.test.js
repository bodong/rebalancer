import initializeData from "../../src/data/MockData";
import { consumeAds } from "../../src/service/ConsumeService";
import {
  getAllMedia,
  getMediaByType,
  init,
} from "../../src/service/DataMediaService";
import initStream from "../../src/service/InitStreamService";

test("it should not consumeable for unknown media", () => {
  expect(() => {
    consumeAds("TEST", 100000);
  }).toThrow();
});

test("it should not consume for ads cost less than 2000", () => {
  init(initializeData());

  expect(() => {
    consumeAds("TVL", 1000);
  }).toThrow();
});

test("it should not consume for ads cost more than 5000", () => {
  init(initializeData());

  expect(() => {
    consumeAds("TVL", 5001);
  }).toThrow();
});

test("it should consume TVL media", () => {
  init(initializeData());
  initStream(30000, getAllMedia());
  consumeAds("TVL", 5000);
  expect(getMediaByType("TVL").amount).toBe(10000);
  expect(getMediaByType("VOD").amount).toBe(15000);
});

test("it should do balancing", () => {
  init(initializeData());
  initStream(10000, getAllMedia());

  consumeAds("TVL", 3000);
  expect(getMediaByType("TVL").amount).toBe(2000);
  expect(getMediaByType("VOD").amount).toBe(5000);

  consumeAds("TVL", 3000);
  expect(getMediaByType("TVL").amount).toBe(500);
  expect(getMediaByType("VOD").amount).toBe(3500);
});
