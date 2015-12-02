Ext.define('ToralVirtual.view.padron.form.TopButtons', {
    extend: 'Ext.panel.Panel',

    xtype:'juee',

    tbar:[
        {
            fieldLabel  : 'N° Mesa',
            xtype:'combobox'

        },{
            text:'Nuevo',
            tooltip     : 'Asignar...',
            disabled    : true,
            iconCls:'fa fa-plus-circle',
            action: 'save',
            formBind: true,
            ui:'soft-blue'

        },'->',
        {
            text:'Guardar',
            //hidden: true,
            iconCls:'fa fa-save',
            action: 'save',
            formBind: true,
            ui:'soft-blue'
        }
    ]
});