import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { exchangeService } from './exchangeService.js';
import exchanger from './exchange.js';

function clearFields() {
  $('.amount').val("");
  $('.showError').text("");
}

$(document).ready(function() {
  $('#exchangeSubmit').click(function() {
    console.log('Working');
    let curr = $('#exchangeCurrency').val();
    let promise = exchangeService.getRate(currency);
    Promise.then(function(response) {
      const body = JSON.parse(response);
      $('.amount').text(`This is the value of your exchange ${curr}`);
    }, function(error) {
      $('.showError').text('There was an error processing this request');
    });
  });
});