/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zcrud_proj/zcrud_proj/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});