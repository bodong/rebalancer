import {
  getCurrentTotalBalance,
  consumeAds,
  stopable,
} from "./src/service/ConsumeService.js";
import initStream from "./src/service/InitStreamService.js";
import {
  getMediaTypes,
  getAllMedia,
  init,
} from "./src/service/DataMediaService.js";
import initializeData from "./src/data/MockData.js";

console.log("Running rebalancer app...");

const budget = process.argv[2] || 0;
console.log(`Going to process with budget ${budget}`);

init(initializeData());

//configure streams data
initStream(budget, getAllMedia());

getAllMedia().forEach((media) =>
  console.log(
    `Init ${media.type} has amount ${media.amount}, threshold : ${media.threshold}`
  )
);

//randomly consume
console.log("\n\nGoing to consume ads randomly between 2k - 5k\n");
const min = 2000;
const max = 5000;
const types = getMediaTypes();
var stop = stopable();
// var i = 0;
while (!stop) {
  const randomAmount = Math.floor(Math.random() * (max - min + 1) + min);
  const randomType = types[Math.floor(Math.random() * types.length)];

  consumeAds(randomType, randomAmount);

  const currentTotalBalance = getCurrentTotalBalance();
  console.log(
    `Consuming ${randomType} for ${randomAmount}. Remaining total budget is ${currentTotalBalance}`
  );

  getAllMedia().forEach((media) =>
    console.log(
      `Post consumption of ${randomType} for ${randomAmount} -> ${media.type} has amount ${media.amount}, threshold : ${media.threshold}`
    )
  );
  stop = stopable();
}

console.log(`Balancing app has been terminated...`);
