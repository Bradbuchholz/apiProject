import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { exchangeService } from './js/exchangeService.js';

function submitResults(response) {
  if (response.result === "success") {
    $("#exchange-value").text(
      `Your ${response.base_code} worth ${response.conversion_result} ${response.target_code}`
    );
    $("#exchange-rate").text(
      `The exchange rate is ${response.conversion_rate}`
    );
    $("#apiError").text("");
  }
}

function displayErrors(response) {
  if (response["error-type"] === "unsupported-code") {
    $("#api-fail").text(
      "Sorry you didn't choose a valid currency. " + response["error-type"]
    );
    $("#exchange-value").text("");
    $("#exchange-rate").text("");
  }
}


$(document).ready(function () {
  $("#submit").click(function (event) {
    event.preventDefault();
    let value = $("#dollar").val();
    let startingCurrency = $("#first-currency").val();
    let convertedCurrency = $("#second-currency").val();
    let promise = exchangeService.currentRate(
      convertedCurrency,
      startingCurrency,
      value
    );
    promise.then(
      function (response) {
        submitResults(JSON.parse(response));
      },
      function (error) {
        if (error.status === 404) {
          $("#api-fail").text(
            "Please enter a valid number" +
              error.status +
              " API could not return a currency conversion. "
          );
          $("#exchange-value").text("");
          $("#exchange-rate").text("");
        } else {
          displayErrors(JSON.parse(error.response));
        }
      }
    );
  });
});