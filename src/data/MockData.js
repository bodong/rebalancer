import MediaStream from "./MediaStream.js";

//simpler mechanism to store data
const initializeData = () => {
  const mediaStreams = [
    new MediaStream("TVL", "TV Linear"),
    new MediaStream("VOD", "Over-the-top Video on Demand"),
  ];
  return mediaStreams;
};

export default initializeData;
