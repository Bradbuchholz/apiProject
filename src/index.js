import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './js/exchangeService.js';

function displayExchange(response, usDollar, currency) {
  if (response.result != 'sucess') {
    $('#displayExchange').text(`An error has occured: ${response.message}`);
  } else if (!currency) {
    $('#displayExchange').text('Please select a currency');
  } else if (usDollar === '') {
    $('#displayExchange').text('Please select the amount in USD');
  } else if (response.result === 'sucess') {
    $('#displayExchange').text(`${usDollar} in ${currency}: ${response.conversion_rates[currency]*usDollar}`);
  } else {
    $('#displayExchange').text('There was an error');
  }
}

$(document).ready(function() {
  $('findRate').click(function(event) {
    event.preventDefault();
    let usDollar = $('#usDollar').val();
    $('#usDollar').val("");
    let currency = $('input:radio:checked').val();
    ExchangeService.getExchange()
      .then(function(response) {
        displayExchange(response, usDollar, currency);
      });     
  });
});