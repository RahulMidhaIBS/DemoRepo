/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ValueHelp_Assignment/ValueHelp_Assignment/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});