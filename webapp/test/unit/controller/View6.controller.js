/*global QUnit*/

sap.ui.define([
	"ValueHelp_Assignment/ValueHelp_Assignment/controller/View6.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View6 Controller");

	QUnit.test("I should test the View6 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});