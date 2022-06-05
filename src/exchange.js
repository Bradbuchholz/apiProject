export class exchanger {
  constructor(inputCurrency, inputAmount, exchangeRateObject) {
    this.USD = exchangeRateObject.converson_rates.USD,
    this.EUR = exchangeRateObject.converson_rates.EUR,
    this.CHF = exchangeRateObject.converson_rates.CHF,
    this.AED = exchangeRateObject.converson_rates.AED,
    this.AMD = exchangeRateObject.converson_rates.AMD,
    this.BBD = exchangeRateObject.converson_rates.BBD,
  }
}
