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
			if (texto === ""){
                texto = "<h2>Revisar la conexión del equipo, no se ha podido comunicar con el servidor Remoto</h2>";
            }

            Ext.Msg.show({
				title:'Error!',
				msg: texto,
                maxWidth : '100%',
				icon: Ext.Msg.ERROR,
				buttons: Ext.Msg.OK
			});
		},

        handleFormFailure: function(action) {

            var me = this,
                result = ToralVirtual.util.Util.decodeJSON(action.response.responseText);

            switch (action.failureType) {
                case Ext.form.action.Action.CLIENT_INVALID:
                    me.showErrorMsg('Los campos del formulario no podrán enviarse con valores no válidos');
                    break;
                case Ext.form.action.Action.CONNECT_FAILURE:
                    me.showErrorMsg(action.response.responseText);
                    break;
                case Ext.form.action.Action.LOAD_FAILURE :
                    me.showErrorMsg('La respuesta de Éxito a retornado negativa o puede que los datos se han recibido vacios ' + action.response.responseText);
                    break;
                case Ext.form.action.Action.SERVER_INVALID:
                    me.showErrorMsg(result.msg);
            }
        }
	}
});