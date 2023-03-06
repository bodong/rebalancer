import initializeData from "../data/MockData.js";

var mediaStreams = [];
const getMediaByType = (type) => {
  if (mediaStreams.length <= 0) {
    mediaStreams = initializeData(); //simulate to get data from data source / either API or database
  }

  return mediaStreams.find((media) => {
    return media.type === type;
  });
};

const getAllMedia = () => {
  if (mediaStreams.length <= 0) {
    mediaStreams = initializeData(); //simulate to get data from data source / either API or database
  }
  return mediaStreams;
};

const getNextConsumeableMedia = () => {
  if (mediaStreams.length <= 0) {
    mediaStreams = initializeData(); //simulate to get data from data source / either API or database
  }
  const consumeableMedia = mediaStreams.find((media) => {
    return media.amount > 0;
  });
  return consumeableMedia;
};

const getMediaTypes = () => {
  const types = getAllMedia().map((media) => {
    return media.type;
  });
  return types;
};

export { getMediaByType, getAllMedia, getMediaTypes };
