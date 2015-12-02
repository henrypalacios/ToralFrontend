Ext.define("ToralVirtual.view.padron.PadronForm",{
    extend: "ToralVirtual.view.main.PanelBase",

    requires: [
        "ToralVirtual.view.padron.PadronFormController",
        "ToralVirtual.view.padron.PadronFormModel",
        "ToralVirtual.view.padron.PadronGrid",
        "ToralVirtual.view.padron.form.ComboMunicipio",
        "ToralVirtual.view.padron.form.ComboParroquia",
        "ToralVirtual.view.padron.form.ComboCentroVotacion",
        'ToralVirtual.view.padron.form.TopButtons',

        'ToralVirtual.view.llamadas.LlamadasList'
    ],

    controller: "padron-padronform",
    viewModel: {
        type: "padron-padronform"
    },

    initComponent: function(){

        var grid = Ext.create('ToralVirtual.view.padron.PadronGrid',{
                title:'Testigos de Mesa'
            });

        var toolbar = Ext.create('ToralVirtual.view.padron.form.TopButtons');

        grid.addDocked(toolbar);

       //toolbar.add({xtype:'combomunicipio',width:'10%'});



        Ext.apply(this,{

            items: [
                {
                    xtype: 'fieldset',
                    title: 'Datos-Centro de Votación',
                    layout: 'hbox',
                    width: '100%',
                    defaults: { 
                        allowBlank: false,
                        forceSelection:true,
                        margin: '0 5 5 0',
                        labelAlign: 'top',
                        msgTarget: 'side'
                    },
                    items: [
                        {
                            xtype       : 'combomunicipio',
                            width       : '20%'
                        },{
                            xtype       : 'comboparroquia',
                            //disabled    : true,
                            width       : '20%',
                        },{
                            xtype       : 'combocentro',
                            width       : '60%',
                        }
                    ]
                },
                {
                    xtype: 'tabpanel',
                    activeTab: 0, // index or id
                    items:[
                        grid,
                        {
                            title: 'Estructura',
                            xtype: 'gridpadron'

                        }
                    ]
                }
            ]

        })

        this.callParent();
    },

    crearToolbars: function(){
        return 1;
    }



// Código Viejo
    /*,
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
    }]*/
});
