sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
            //console.log(sStatus);
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("neo");
				case "B":
					return resourceBundle.getText("sapfiori");
				case "C":
					return resourceBundle.getText("cafe");
				default:
					return sStatus;
			}
        },

        cfristUpperCaseFormatter: function(sName) {
            return sName.charAt(0).toUpperCase() + sName.slice(1);
        }        
	};
});