
Ext.define("ToralVirtual.view.llamadas.LlamadasList",{
    extend: "ToralVirtual.view.main.PanelBase",

    xtype: 'llamadaspanel',

    requires: [
        'ToralVirtual.view.llamadas.LlamadasListController',
        'ToralVirtual.view.llamadas.LlamadasListModel',
        'ToralVirtual.view.llamadas.form.ComboEventos',
        'ToralVirtual.view.llamadas.ListLlamadasGrid'
    ],

    controller: "llamadas-llamadaslist",
    viewModel: {
        type: "llamadas-llamadaslist"
    },
    //title:'Panel de Llamadas',
/*    padding:5,

    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },*/

    tbar:[
        {
            xtype:'comboeventos'

        },'->',
        {
            xtype: 'radiogroup',
            columns: 2,
            anchor:'90%',
            items: [
                {
                    boxLabel: 'Personas sin comunicar',
                    name: 'contacto',
                    inputValue: 0,
                    checked: true
                },
                {
                    boxLabel: 'Todas',
                    name: 'contacto',
                    inputValue: 1,
                    padding: '0 0 0 20'
                }
            ],
            listeners:{
                change:function(grupo,cmp){
                    /*cargarTblContactos.baseParams ={op: 'TABLA_CONTACTOS', evento: Ext.getCmp('cmbEventoTbl').getValue(),usuario:Ext.getCmp('cmbUsuarioTbl').getValue(), contacto:cmp.getId(),start:0, limit:10};
                    cargarTblContactos.load();*/
                }
            }
        }
    ],

    items:[
        {
            layout: 'fit',
            items:[{
                xtype:'gridlistadollamadas',
                height:'100%'
            }]
        }
    ],


});
