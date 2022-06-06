export default class ExchangeService {
  static getRate() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(rateResponse) {
      if (!rateResponse.ok) {
        throw Error(rateResponse.statusText);
      }
      return rateResponse.json();
    })
    .catch(function(error) {
      return error;
    })
  }
}


