Ext.define('ToralVirtual.store.llamadas.ListaLlamadas', {
    extend: 'Ext.data.Store',

    storeId: 'listaLlamadas',

    fields: [
       'nombre',
       'apellido',
       'cedula',
        {name:'idtestigo', type:'int'},
       'nota',
        {name:'asistencia', type:'boolean'},
        {name:'idcentro', type:'int'},
        {name:'tlf1', type:'int'},
        {name:'tlf2', type:'int'},
        {name:'nombrecargo'}
    ],

    proxy:{
        type: 'ajax',
        url: 'server/listaLlamadas.json',

        reader:{
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }

});