class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, duration) {
     
      const distanceCost = this.costPerKm * distance;
      const durationCost = this.costPerMinute * duration;
      const totalFare = this.baseFare + distanceCost + durationCost;
      return totalFare;
    }
  }
  
  const uberCalculator = new UberPriceCalculator(5, 1.5, 0.25);
  const distance = 100; 
  const duration = 200; 
  const price = uberCalculator.calculatePrice(distance, duration);
  console.log("The estimated price for the Uber ride is: $" + price.toFixed(2));
  