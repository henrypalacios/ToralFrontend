Ext.define('ToralVirtual.view.login.WindowLogin', { 
	extend: 'Ext.window.Window', 
	xtype: 'login', 
	requires: [
		'ToralVirtual.view.login.WindowLoginController',
		'Ext.form.Panel'
	],
	controller: 'login',
	autoShow: true, 
	height: 200, 
	width: 360,
	modal:true,
	layout: {
		type: 'fit' 
	},
	iconCls: 'fa fa-user fa-lg', 
	title: 'Login', 
	closeAction: 'hide', 
	closable: false, 
	draggable: false, 
	resizable: false,

	items: [
		{
			xtype: 'form', 
			reference: 'formulario',
			bodyPadding: 15, 
			defaults: { 
				xtype: 'textfield', 
				anchor: '100%',
				allowBlank: false,
				minLength: 6
			},
			items: [
				{
					name: 'usuario',
					fieldLabel: 'Usuario',
					maxLength: 36
				},
				{
					inputType: 'password', 
					name: 'clave',
					fieldLabel: 'Contraseña',
					maxLength: 20,
					//vtype: 'clavePermitida',
					msgTarget: 'side',
					id: 'password', //ID para evento de CapsLock 
					enableKeyEvents: true,
					listeners: {
						specialKey: 'onTextFieldSpecialKey',
						keypress: 'onTextFieldKeyPress'
					}
				}
			],
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'bottom',
				items: [{
					xtype: 'tbfill'
				}, {
					xtype: 'button',
					text: 'Limpiar',
					iconCls: 'fa fa-eraser fa-lg',
					listeners: { click: 'onButtonClickCancel'},
					ui:'soft-blue'
				}, {
					xtype: 'button',
					formBind: true,
					iconCls: 'fa fa-sign-in fa-lg',
					text: 'Entrar',
					listeners: { click: 'onButtonClickSubmit'},
					ui:'soft-blue'
				}]
			}]
		}
	]
});