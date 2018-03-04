(function(window) {
  "use strict";

  var MODAL_SELECTOR = "[data-modal-info=\"modal\"]";
  var FORM_SELECTOR = "[data-payment-info=\"form\"]";

  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var CheckList = App.CheckList;
  var checkList = new CheckList(MODAL_SELECTOR);
  var myTruck = new Truck("ncc-1701", new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    myTruck.createOrder(data);
    checkList.addModalText(data);
  });
})(window);
