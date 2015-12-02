Ext.define('ToralVirtual.view.padron.PadronGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'gridpadron',

    initComponent: function(){

        var padron = Ext.create('ToralVirtual.store.padron.ListaPadron',{
                autoLoad:true
            });

        Ext.apply(this,{

            store:padron,

            columns:[
                {dataIndex: 'idcargo',      hidden: true},
                {header: 'Cargo',           dataIndex: 'cargo',         align: 'center'},
                {header: 'Cédula',          dataIndex: 'cedula',        align: 'center'},
                {header: 'Nombre',          dataIndex: 'nombre',        align: 'justyfi'},
                {header: 'Apellido',        dataIndex: 'apellido',      align: 'justyfi'},
                {header: 'Telf. Local',     dataIndex: 'tlf1',          align: 'center'},
                {header: 'Telf. Celular',   dataIndex: 'tlf2',          align: 'center'},
                {header: 'Dirección',       dataIndex: 'direccion',     align: 'justyfi',
                    flex:1},
                {header: 'Email',           dataIndex: 'email',         align: 'justyfi'}
            ],

            dockedItems:[{
                xtype:'pagingtoolbar',
                store: padron,
                dock: 'bottom',
                displayInfo:true
            }]

        });

        this.callParent();
    }
});