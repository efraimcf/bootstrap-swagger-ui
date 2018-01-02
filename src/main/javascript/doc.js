'use strict';


$(function () {
  // When a sandbox form is submitted..
  $("form.sandbox").submit(function () {
    var error_free = true;
    // Cycle through the forms required inputs
    $(this).find("input.required").each(function () {
      // Remove any existing error styles from the input
      $(this).removeClass('is-invalid');

      // Tack the error style on if the input is empty..
      if ($(this).val() === '') {
        $(this).addClass('is-invalid');
        $(this).wiggle();
        error_free = false;
      }

    });
    return error_free;
  });

});

// Logging function that accounts for browsers that don't have window.console
function log() {
  log.history = log.history || [];
  log.history.push(arguments);
  if (this.console) {
    console.log(Array.prototype.slice.call(arguments)[0]);
  }
}

// Handle browsers that do console incorrectly (IE9 and below, see http://stackoverflow.com/a/5539378/7913)
if (Function.prototype.bind && console && typeof console.log === "object") {
  [
    "log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"
  ].forEach(function (method) {
      console[method] = this.bind(console[method], console);
    }, Function.prototype.call);
}
