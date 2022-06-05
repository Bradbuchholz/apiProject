export class exchanger {
  constructor(inputCurrency, inputAmount, exchangeRateObject) {
    this.USD = exchangeRateObject.converson_rates.USD,
    this.EUR = exchangeRateObject.converson_rates.EUR,
    this.CHF = exchangeRateObject.converson_rates.CHF,
    this.AED = exchangeRateObject.converson_rates.AED,
    this.AMD = exchangeRateObject.converson_rates.AMD,
    this.BBD = exchangeRateObject.converson_rates.BBD,
    this.CUP = exchangeRateObject.converson_rates.CUP,
    this.inputCurrency = inputCurrency,
    this.inputAmount = inputAmount,
    this.outPutAmount = this.exchangeResults(this.inputCurrency,this.inputAmount)
  }

  exchangeResults(inputCurrency,inputAmount) {
    let exchangeValue = this[inputCurrency];
    let result = exchangeValue*inputAmount;
    return result;
  }
}
