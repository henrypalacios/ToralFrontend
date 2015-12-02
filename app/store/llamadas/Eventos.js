Ext.define('ToralVirtual.store.llamadas.Eventos', {
    extend: 'Ext.data.Store',

    storeId: 'eventosStore',

    fields: [
       'nombre',
        {name:'id', type:'int'}
    ],

    proxy:{
        type: 'ajax',
        url: 'server/listEventos.json',

        reader:{
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }

});