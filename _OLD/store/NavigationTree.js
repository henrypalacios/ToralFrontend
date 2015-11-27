Ext.define('ToralVirtual.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',
    autoload : true,
    root: {
        expanded: true,
        children: [
            {
                text:   'Padrón Electoral',
                view:   'dashboard.Dashboard',
                leaf:   true,
                iconCls: 'right-icon x-fa fa-users',
                routeId: 'dashboard'
            },
            {
                text:   'Llamadas',
                view:   'email.Email',
                iconCls: 'right-icon x-fa fa-phone',
                leaf:   true,
                routeId: 'email'

            }
        ]
    },
    fields: [
        {
            name: 'text'
        }
    ]
});
