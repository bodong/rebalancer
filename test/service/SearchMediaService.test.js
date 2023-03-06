import {
  getMediaByType,
  getAllMedia,
} from "../../src/service/SearchMediaService";

test("should get media by type TVL", () => {
  const media = getMediaByType("TVL");
  expect(media).toBeTruthy();
  expect(media.type).toBe("TVL");
});

test("should get undefined by type UNKOWN", () => {
  const media = getMediaByType("UNKNOWN");
  expect(media).toBeUndefined();
});

test("should get all media", () => {
  const medias = getAllMedia();
  expect(medias).toBeTruthy();
  expect(medias.length).toBeGreaterThan(1);

  //validate data
  expect(medias).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        type: "TVL",
      }),
      expect.objectContaining({
        type: "VOD",
      }),
    ])
  );
});
