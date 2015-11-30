Ext.define('ToralVirtual.view.login.WindowLoginController', { 
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	requires: [
		'ToralVirtual.util.Util',
    'ToralVirtual.view.login.CapsLockTooltip',
    'ToralVirtual.util.SessionMonitor'
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
			url: ToralVirtual.util.Global.getProduccion() ? '/auth/login' : 'server/doLogin.json',
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

		console.log(form); //Arreglar problema de Errores de mensaje en respuestua de servidor

        ToralVirtual.util.Util.handleFormFailure(action);

	},
	onLoginSuccess: function(form, action) {

		this.getView().unmask();

		localStorage.setItem("ToralLoggedIn", true);

		this.getView().destroy();

		Ext.create({
			xtype: 'app-main'
		});
		ToralVirtual.util.SessionMonitor.start();
	}
});