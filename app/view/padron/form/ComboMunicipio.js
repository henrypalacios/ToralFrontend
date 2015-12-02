Ext.define('ToralVirtual.view.padron.form.ComboMunicipio', {
    extend: 'Ext.form.ComboBox',

    xtype: 'combomunicipio',

    fieldLabel  : 'Municipio:',
    name        : 'municipio',
    emptyText:'Selecciona un municipio...',
    displayField: 'nombre',
    valueField: 'id',

    initComponent: function(){

      Ext.apply(this, {
        store: Ext.create('ToralVirtual.store.Municipio')
      });


      this.callParent();
    }
});