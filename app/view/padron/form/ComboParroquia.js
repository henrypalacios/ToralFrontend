Ext.define('ToralVirtual.view.padron.form.ComboParroquia', {
    extend: 'Ext.form.ComboBox',

    xtype: 'comboparroquia',

    fieldLabel  : 'Parroquia:',
    name        : 'parroquia',
    emptyText:'Selecciona una parroquia...',
    displayField: 'nombre',
    valueField: 'id',

    initComponent: function(){

      Ext.apply(this, {
        store: Ext.create('ToralVirtual.store.Parroquia')
      });


      this.callParent();
    }
});