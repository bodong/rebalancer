const initStream = (budget, medias) => {
  if (!Array.isArray(medias) || medias.length <= 0) {
    throw Error("Data set is required");
  }

  if (budget < 10000) {
    throw Error("Minimum budget allowed is 10000");
  }

  const allocatedBudget = budget / medias.length;
  medias.forEach((media) => {
    let amount = allocatedBudget;
    media.updateAmount(amount);
    media.updateThreshold();
  });
};

export default initStream;
