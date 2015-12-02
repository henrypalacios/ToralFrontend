
Ext.define("ToralVirtual.view.padron.PadronForm",{
    extend: "Ext.panel.Panel",

    requires: [
        "ToralVirtual.view.padron.PadronFormController",
        "ToralVirtual.view.padron.PadronFormModel",
        "ToralVirtual.view.padron.PadronGrid",
        "ToralVirtual.view.padron.form.ComboMunicipio",
        "ToralVirtual.view.padron.form.ComboParroquia",
        "ToralVirtual.view.padron.form.ComboCentroVotacion"
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
                xtype       : 'combomunicipio',
                width       : '20%'
            },{
                xtype       : 'comboparroquia',
                //disabled    : true,
                width       : '20%',
            },{
                xtype       : 'combocentro',
                width       : '60%',
            }]
        },{
            xtype:'gridpadron'
        }]
    }]
});
