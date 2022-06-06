export default class ExchangeService {
  static async getRate() {
    try {
      const rateResponse = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      if (!rateResponse.ok) {
        throw Error(rateResponse.statusText);
      }
      return await rateResponse.json();
    } catch (error) {
      return error;
    }
  }
}


