//as threshold of 5%
const thresholdRate = 5 / 100;

const MediaStream = class {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.amount = 0.0;
    this.threshold = 0.0;
  }

  updateAmount(amount) {
    this.amount = amount;
  }

  updateThreshold() {
    if (this.amount) {
      this.threshold = thresholdRate * this.amount;
    }
  }
};

export default MediaStream;
