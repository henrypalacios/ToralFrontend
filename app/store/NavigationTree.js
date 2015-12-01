Ext.define('ToralVirtual.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    autoLoad:true,

/*    root: {
        expanded: true,
        children: [
            {
                text:   'Padrón Electoral',
                view:   'padron.PadronForm',
                leaf:   true,
                iconCls: 'right-icon x-fa fa-users',
                routeId: 'padron'
            },
            {
                text:   'Llamadas',
                view:   'llamadas.LlamadasList',
                iconCls: 'right-icon x-fa fa-phone',
                leaf:   true,
                routeId: 'llamadas'

            }
        ]
    },*/

    fields: [
        {
            name: 'text'
        }
    ],

    proxy:{
        type: 'ajax',
        url: 'server/navigationItems.json',

        reader:{
            type: 'json',
            rootProperty: 'data',
            totalProperty: 'total'
        }
    }

});
