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
            {header: 'Centro',          dataIndex: 'idcentro',      align: 'center',    renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {header: 'Cargo',           dataIndex: 'cargo',         align: 'center',    width:150, renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {header: 'C&eacute;dula',   dataIndex: 'cedula',        align: 'center',    filter: {field: {xtype: 'cleartextfield'}, test: '/{0}/i'}, renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {header: 'Nombre',          dataIndex: 'nombre',        align: 'justyfi',   width:240, renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {header: 'Telf. Local',     dataIndex: 'tlf1',          align: 'center',    filter: {field: {xtype: 'cleartextfield'}, test: '/{0}/i'}, renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {header: 'Telf. Celular',   dataIndex: 'tlf2',          align: 'center',    filter: {field: {xtype: 'cleartextfield'}, test: '/{0}/i'}, renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {header: 'Nota',            dataIndex: 'nota',          align: 'justyfi',   flex:1, renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {header: 'Asistencia',      dataIndex: 'asistencia',    align: 'center',    renderer: function(v){ return ('<SPAN class="ajustar-texto-grid">'+v+'</SPAN>')}},
            {
                xtype:'actioncolumn',
                width:50,
                items: [{
                    iconCls: 'x-fa fa-phone-square',  // Use a URL in the icon config
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