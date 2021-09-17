sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "com/sfc/formatter/model/formatter" // custom Formatter 사용하기 위해 선언
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, formatter) {
		"use strict";

		return Controller.extend("com.sfc.formatter.controller.App", { 

            formatter: formatter, // formatter

			onInit: function () {
                var oJSONModel =  new JSONModel({ 
                    _data : {
			        "date" : new Date()
                    },
                    "forms" : {                        
                        "name" : "Neo",
                        "Cafe" : {
                            "Name" : "SAP Fiori Cafe",
                            "Address" : "https://cafe.naver.com/sapux"
                        },
                        "sex" : "M",
                        "age" : "18"
                    },
                    "Name" : "Neo",
                    "Sex" : "F",
                    "Price" : "10000000",
                    "Age" : "99",
                    "CafeName" : "sap fiori cafe(sfc)",
                    "Student": [{     
                        "id": "001",        
                        "name": "Neo",
                        "sex" : "M",                        
                        "phone": "010-2265-0000",
                        "Addresss": "Seoul",
                        "Status" : "A"
                    },{
                        "id": "002",        
                        "name": "SAPUI5/BTP",
                        "sex" : "F",                        
                        "phone": "010-2275-0000",
                        "Addresss": "Seoul",
                        "Status" : "B"
                    },{
                        "id": "003",        
                        "name": "욱이네",
                        "sex" : "M",                        
                        "phone": "010-22i85-0000",
                        "Addresss": "Seoul",
                        "Status" : "C"
                    },{
                        "id": "004",        
                        "name": "Desong",
                        "sex" : "M",                        
                        "phone": "010-2295-0000",
                        "Addresss": "Seoul",
                        "Status" : "A"
                    },{
                        "id": "005",        
                        "name": "Gilbert Blyth",
                        "sex" : "F",                        
                        "phone": "010-2300-0000",
                        "Addresss": "Seoul",
                        "Status" : "B"
                    }],
                    "Books" : [{
                        "Title" : "Easy Fiori",
                        "Author" : "Neo",
                        "Price" : "30",
                        "CurrencyCode" : "EUR",
                        "State" : "Error"
                    },{
                        "Title" : "Easy SAPUI5",
                        "Author" : "Neo",
                        "Price" : "25",
                        "CurrencyCode" : "USD",
                        "State" : "Warning"
                    },{
                        "Title" : "Easy CDS VIEW",
                        "Author" : "Neo",
                        "Price" : "30000",
                        "CurrencyCode" : "KOR",
                        "State" : "Success"
                    }],
                    "StudyType" : [{
                        "title": "Fiori",        
                        "code": "001",       
                        "desc": "SAP Fiori",
                        "maxnum": "7",
                        "expenses" :["1004.99","$"],   
                        "status" : "A"
                    },  {
                        "title": "SAPUI5",        
                        "code": "002",       
                        "desc": "SAP SAPUI5",
                        "maxnum": "5",
                        "School_expenses" :["999.99","$"],                      
                        "status" : "B"
                    },  {
                        "title": "CDS VIEW",        
                        "code": "003",       
                        "desc": "SAP CDS VIEW",
                        "maxnum": "6",
                        "expenses" :["899.99","$"],                        
                        "status" : "C"
                        }                                                                                        
                    ]  
                });

                this.setModel(oJSONModel);
                var inputBindValue = this.getView().byId("inputBindValue");
                inputBindValue.bindValue({
                    parts: [
                        {path: "/Name", type: new sap.ui.model.type.String()},
                        {path: "/Sex", type: new sap.ui.model.type.String()},
                        {path: "/Age", type: new sap.ui.model.type.String()}                        
                        ],
                    formatter: function(name, sex, age, pay){ 
                        if (name && sex) {
                                return "User Name=" + name + " User Sex="+ sex + " User Age="+ age; 
                        } else {
                                return null;
                        }
                    }
                });
               

            },

            fristUpperCaseFormatter : function(sName) {
                return sName.charAt(0).toUpperCase() + sName.slice(1);
            },

            getModel : function (sName) {
			    return this.getView().getModel(sName);
		    },

            setModel : function (oModel, sName) {
                return this.getView().setModel(oModel, sName);
            }            
		});
	});
