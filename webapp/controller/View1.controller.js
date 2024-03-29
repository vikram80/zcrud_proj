sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("zcrud_proj.zcrud_proj.controller.View1", {
		onInit: function () {
			
			// Create Model Instance of the oData service
		var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZCRUD_PROJ_SRV");
		sap.ui.getCore().setModel(oModel, "myModel");
		
		},
		/**
		 *@memberOf zcrud_proj.zcrud_proj.controller.View1
		 */
		onProcess: function (oEvent) {
			//This code was generated by the layout editor.
		// call oData service's function based on which button is clicked.
		var myModel = sap.ui.getCore().getModel("myModel");
		myModel.setHeaders({
			"X-Requested-With" : "X"
		});
		/* eslint-disable sap-no-ui5base-prop */
		// CREATE
		if ( oEvent.oSource.mProperties.text === "Create" ) {
			var obj = {};
			obj.Id = this.getView().byId("inpId").getValue();
			obj.Name = this.getView().byId("inpName").getValue();
			obj.Email = this.getView().byId("inpEmail").getValue();
			obj.JoinDate = this.getView().byId("inpDate").getValue();
			myModel.create('/userdataSet', obj, {
				success : function(oData, oResponse) {
					MessageToast.show("Record created successfully");
					},
				error : function(err) {
					MessageToast.show("Record created successfully-"
					        .concat(err.response.statusText));
					// alert('Error while creating record - '
					// 		.concat(err.response.statusText));
				}
			});
		
			//
		
		}
		
		
		else if ( oEvent.oSource.mProperties.text === "Read" ) {
			var obj = {};
			obj.Id = this.getView().byId("inpId").getValue();
			
			var readurl = "/userdataSet?$filter=(id eq '')";
			myModel.read(readurl, {
				success : function(oData, oResponse) {
					var userdata = new sap.ui.model.json.JSONModel({
						"Result" : oData.results
					});
					var tab = this.getView().byId("userdatatable");
					tab.setModel(userdata);
					
					// MessageToast.show("Record created successfully");
					},
				error : function(err) {
					MessageToast.show("Record read failed-"
					        .concat(err.response.statusText));
					// alert('Error while creating record - '
					// 		.concat(err.response.statusText));
				}
			});
		/* eslint-enable sap-no-ui5base-prop */
			//
		
		}
			
		}
	});
});