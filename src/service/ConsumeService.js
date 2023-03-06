import { getAllMedia, getMediaByType } from "./SearchMediaService.js";

const consumeable = (media) => {
  return media.amount > 0;
};

const stopable = () => {
  const runoutBalance = getAllMedia().every((media) => media.amount <= 0);
  return runoutBalance;
};

const balanceable = (consumptionAmount) => {
  const balanceableMedias = getAllMedia().filter((media) => {
    let estimatedAmount = media.amount - consumptionAmount;
    return estimatedAmount <= media.threshold;
  });

  //to make sure if 1 side of media is close to threshold
  return balanceableMedias.length == 1;
};

const getCurrentTotalBalance = () => {
  const totalCurrentAmount = getAllMedia().reduce(
    (acummulator, media) => acummulator + media.amount,
    0
  );
  return totalCurrentAmount;
};

const balancing = () => {
  const totalCurrentAmount = getCurrentTotalBalance();

  let data = getAllMedia();
  const dividedAmount = totalCurrentAmount / data.length;

  data.forEach((media) => {
    media.updateAmount(dividedAmount);
  });
};

const consumeAds = (type, consumptionAmount) => {
  const media = getMediaByType(type);

  // check if consumeable (meaning requested media must be positive)
  if (!consumeable(media)) {
    //TODO: in the requirement is not mention for this scenario (what to do for negative value), maybe best if the request is redirected to other
    //consumable media, but this is need to confirm with business team.
    console.warn(
      `Media ${media.type} has balance ${media.amount}. Not possible to consume anymore`
    );
    return;
  }

  // check if balanceable then perform balancing first
  if (balanceable(consumptionAmount)) {
    console.log(
      "Balancing is going to be performed for consumption request ",
      consumptionAmount
    );
    balancing();
    getAllMedia().forEach((media) =>
      console.log(`After Balancing ${media.type} has ${media.amount} balance`)
    );
  }

  // do regular consumption
  const balance = media.amount - consumptionAmount;
  media.updateAmount(balance);
};

export { stopable, getCurrentTotalBalance, consumeAds };
