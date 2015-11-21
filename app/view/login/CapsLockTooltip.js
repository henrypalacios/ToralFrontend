Ext.define('ToralVirtual.view.login.CapsLockTooltip', {
	extend: 'Ext.tip.QuickTip',

	xtype: 'capslocktooltip',

	target: 'password',
	anchor: 'top',
	anchorOffset: 0,
	width: 300,
	dismissDelay: 0,
	autoHide: false,
	title: '<div class="fa fa-exclamation-triangle"> Bloq Mayús esta activado</div>',
	html: '<div>Atención, tiene la te tecla de mayúsculas activada, verifique que quiere escribir en mayúsculas.</div><br/>' + '<div>De lo contrario debe presionar la tecla Bloq Mayús(Caps Lock) para desactivarla ' + 'antes de introducir la contraseña.</div>'

});