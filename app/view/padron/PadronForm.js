
Ext.define("ToralVirtual.view.padron.PadronForm",{
    extend: "Ext.panel.Panel",

    requires: [
        "ToralVirtual.view.padron.PadronFormController",
        "ToralVirtual.view.padron.PadronFormModel"
    ],

    controller: "padron-padronform",
    viewModel: {
        type: "padron-padronform"
    },

    items: [{
        xtype   : 'container',
        layout  : 'vbox',
        width   : '100%',
        padding : '20',
        items   : [{
            xtype: 'fieldset',
            title: 'Datos-Centro de Votación',
            layout: 'hbox',
            width: '100%',
            defaults: { 
                xtype: 'combobox',
                allowBlank: false,
                forceSelection:true,
                margin: '0 5 5 0',
                labelAlign: 'top',
                msgTarget: 'side'
            },
            items: [{
                fieldLabel  : 'Municipio:',
                name        : 'municipio',
                emptyText   :'Seleccionar',
                queryMode   : 'remote',
                editable    : false,
                /*store       : {
                    type: 'municipio'
                },*/
                width       : '20%',
                valueField  : 'id',
                displayField: 'nombre'
            },{
                fieldLabel  : 'Parroquia:',
                name        : 'parroquia',
                emptyText   :'Seleccionar',
                queryMode   : 'local',
                editable    : false,
                //disabled    : true,
                //store       : Ext.create('MyApp.store.Parroquia'),
                width       : '20%',
                valueField: 'id',
                displayField: 'nombre'
            },{
                fieldLabel  : 'Centro de Votación:',
                name        : 'centro',
                emptyText   :'Seleccionar',
                queryMode   : 'local',
                editable    : false,
                //disabled    : true,
                //store       : Ext.create('MyApp.store.CentroVotacion'),
                width       : '60%',
                valueField  : 'id',
                displayField: 'nombre'
            }]
        },{

        }]
    }]
});
