Ext.define('ToralVirtual.util.Util', {
	statics : {
		decodeJSON : function (texto) {
			var result = Ext.JSON.decode(texto, true);
			if (!result){
				result = {};
				result.success = false;
				result.msg = texto;
			}
			return result;
		},
		showErrorMsg: function (texto) {
			Ext.Msg.show({
				title:'Error!',
				msg: texto,
				icon: Ext.Msg.ERROR,
				buttons: Ext.Msg.OK
			});
		}
	}
});