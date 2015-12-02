Ext.define('ToralVirtual.view.llamadas.ListLlamadasGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'gridlistadollamadas',

    initComponent: function(){

        var llamadas = Ext.create('ToralVirtual.store.llamadas.ListaLlamadas',{
                autoLoad:true
            });

        Ext.apply(this,{

            store:llamadas,

            columns:[
            {header: 'Centro',          dataIndex: 'idcentro',      align: 'center'},
            {header: 'Cargo',           dataIndex: 'nombrecargo',   align: 'center',
                width:150},
            {header: 'Cédula',          dataIndex: 'cedula',        align: 'center'},
            {header: 'Nombre',          dataIndex: 'nombre',        align: 'justyfi',
                width:240},
            {header: 'Telf. Local',     dataIndex: 'tlf1',          align: 'center'},
            {header: 'Telf. Celular',   dataIndex: 'tlf2',          align: 'center'},
            {header: 'Nota',            dataIndex: 'nota',          align: 'justyfi',
                flex:1},
            {header: 'Asistencia',      dataIndex: 'asistencia',    align: 'center',
                renderer: function(value, metaData, record){
                    if (value){
                        return '<i class="fa fa-check"></i>'
                    }
                }
            },
            {
                xtype:'actioncolumn',
                menuDisabled:true,
                width:25,
                items: [{
                    icon: 'resources/images/img_24/phone.png',  // Use a URL in the icon config
                    tooltip: 'Realizar Llamada',
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        alert("Llamar a " + rec.get('nombre'));
                    }
                }]
            }
            ],

            dockedItems:[{
                xtype:'pagingtoolbar',
                store: llamadas,
                dock: 'bottom',
                displayInfo:true
            }]

        });

        this.callParent();
    }
});