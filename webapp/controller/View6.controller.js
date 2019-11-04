sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ValueHelp_Assignment.ValueHelp_Assignment.controller.View6", {
		onInit: function () {

		},
		onValueHelp: function (oEvent){
			var id = oEvent.getParameters().id.split("--")[2];
			var oDialog = new sap.ui.xmlfragment("ValueHelp_Assignment.ValueHelp_Assignment.fragments.SelectDialog",this);
			this.getView().addDependent(oDialog);
			if(id == "id1"){
				oDialog.bindAggregation("items",{
				path:"city>/city",
				template: new sap.m.StandardListItem({
					title : "{city>cityName}"
				})
			});
			}
			else{
				oDialog.bindAggregation("items",{
				path:"country>/country",
				template: new sap.m.StandardListItem({
					title : "{country>countryName}"
				})
			});
			}
			
			oDialog.open();
		}
	});
});