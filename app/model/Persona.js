Ext.define('ToralVirtual.model.Persona',{
	extend: 'Ext.data.Model',
	fields: [
		{name: 'cedula', type: 'int'},
		'nombre',
		'apellido',
		{name  : 'codTlf1', type  : 'string',
			convert : function(value, record) {
				if (record.get('tlf1')>0) {
					return record.get('tlf1').substring(0,3);
				}
				else return null;
			}
		},
		{name  : 'celular', type  : 'string',
			convert :function(value, record) {
				return record.get('tlf1').substring(3,10);
			}
		},
		'tlf1',
		{name  : 'codTlf2', type  : 'string',
			convert : function(value, record) {
				if (record.get('tlf2')>0) {
					return record.get('tlf2').substring(0,3);
				}
				else return null;
			}
		},
		{name  : 'local', type  : 'string',
			convert :function(value, record) {
				return record.get('tlf2').substring(3,10);
			}
		},
		'tlf2',
		'direccion',
		'email'
	]
});