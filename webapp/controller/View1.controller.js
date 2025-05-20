sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onInit() {
        },
    onSave: function () {
      sap.m.MessageToast.show("Data saved");
    },
    onClear: function () {
      this.byId("i_name").setValue("");
      this.byId("i_street").setValue("");
      this.byId("i_houseno").setValue("");
      this.byId("i_zipcode").setValue("");
      this.byId("i_city").setValue("");
      this.byId("box_country").setSelectedKey(null);
    }
    });
});