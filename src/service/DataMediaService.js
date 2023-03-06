var mediaStreams = [];

const init = (datas) => {
  mediaStreams = datas;
};

const getMediaByType = (type) => {
  const media = mediaStreams.find((media) => {
    return media.type === type;
  });

  if (media === undefined) {
    throw Error(`No media exist for given type ${type}`);
  }

  return media;
};

const getAllMedia = () => {
  return mediaStreams;
};

const getMediaTypes = () => {
  const types = getAllMedia().map((media) => {
    return media.type;
  });
  return types;
};

export { init, getMediaByType, getAllMedia, getMediaTypes };
