Ext.define('ToralVirtual.store.padron.ListaPadron', {
    extend: 'Ext.data.Store',

    model: 'ToralVirtual.model.padron.ListaPadron',
    proxy:{
        type: 'ajax',
        url: 'server/listaPadron.json',

        reader:{
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }

});