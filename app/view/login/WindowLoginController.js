Ext.define('ToralVirtual.view.login.WindowLoginController', { 
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	requires: [
		'ToralVirtual.util.Util',
    'ToralVirtual.view.login.CapsLockTooltip'//,
    //'ToralVirtual.util.SessionMonitor'
	],
	onTextFieldSpecialKey: function(field, e, options){

		if (e.getKey() === e.ENTER) {
			this.doLogin();
		}

	}, // #4
	onTextFieldKeyPress: function(field, e, options){
		var charCode = e.getCharCode(),
		me = this;
		if((e.shiftKey && charCode >= 97 && charCode <= 122) || (!e.shiftKey && charCode >= 65 && charCode <= 90)){
			if(me.capslockTooltip === undefined){
				me.capslockTooltip = Ext.widget('capslocktooltip');
			}
			me.capslockTooltip.show();
		}else {
			if(me.capslockTooltip !== undefined){ 
				me.capslockTooltip.hide(); 
			}
		}
	},
	onButtonClickCancel: function(button, e, options){

		this.lookupReference('formulario').reset();

	},
	onButtonClickSubmit: function(button, e, options){
		var me = this;

		if (me.lookupReference('formulario').isValid()){ // #1
			me.doLogin();
		}

	},
	doLogin: function() {
		this.getView().mask('Autenticando… Espera…');

		var me = this,

		form = me.lookupReference('formulario');
		
		form.submit({
			clientValidation: true,
			url: 'server/doLogin.json',
			scope: me, //Alcance sobre me
			params: {
				newStatus: 'delivered'
			},
			success: 'onLoginSuccess',
			failure: 'onLoginFailure'
		});

	}, // #8
	onLoginFailure: function(form, action) {
		this.getView().unmask();

		console.log(action); //Arreglar problema de Errores de mensaje en respuestua de servidor

		var result = ToralVirtual.util.Util.decodeJSON(action.response.responseText);

		switch (action.failureType) {
			case Ext.form.action.Action.CLIENT_INVALID: //#5
				ToralVirtual.util.Util.showErrorMsg('Los campos del formulario no podrán enviarse con valores no válidos');
			break;

			case Ext.form.action.Action.CONNECT_FAILURE: 
				ToralVirtual.util.Util.showErrorMsg(action.response.responseText);
			break;

			case Ext.form.action.Action.SERVER_INVALID: 
				ToralVirtual.util.Util.showErrorMsg(result.msg);
		}

	},
	onLoginSuccess: function(form, action) {

		this.getView().unmask();

		localStorage.setItem("ToralLoggedIn", true);

		this.getView().destroy(); 
		//Sistema.util.SessionMonitor.start();

		Ext.create({
			xtype: 'app-main'
		});

	}
});