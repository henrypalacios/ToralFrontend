Ext.define('ToralVirtual.store.CentroVotacion', {
    extend: 'Ext.data.Store',

    model: 'ToralVirtual.model.Model',

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