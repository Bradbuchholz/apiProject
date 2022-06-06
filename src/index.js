import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';
import { Exchanger } from './js/exchange.js';

$(document).ready(function() {
  $('#exchangeSubmit').click(function(event) {
    event.preventDefault();
    let exchanges;
    const inputCurrency = $('#firstCurrency').val();
    const inputAmount = $('#exchangeCurrency').val();
    $('#exchangeResult').html("Exchange Amount: ");
    $('#firstCurrency').val("");
    ExchangeService.getRate()
    .then(function(rateResponse) {
      exchanges = new Exchanger(inputCurrency,inputAmount,rateResponse);
      $('exchangeResult').append(`${exchanges.exchangeResults(inputCurrency,inputAmount)} ${inputCurrency}`);
    });
  })
});