(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;

  function CheckList(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }
    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("could not find element with selector: " + selector);
    }
  }

  function ModalText(titleAndName) {
    var $paragraph = $("<p></p>", {
      "data-payment-name": "username-and-title"
    });
    var description = "Thank you for your payment, " + titleAndName.title + " " + titleAndName.username;
    $paragraph.append(description);
    this.$element = $paragraph;
  }

  CheckList.prototype.removeModalText = function() {
    this.$element
      .find("[data-payment-name=\"username-and-title\"]")
      .remove();
  };

  CheckList.prototype.addModalText = function(titleAndName) {
    this.removeModalText();
    var rowElement = new ModalText(titleAndName);
    this.$element.append(rowElement.$element);
  };

  App.CheckList = CheckList;
  window.App = App;
})(window);
