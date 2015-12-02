Ext.define('ToralVirtual.view.padron.form.ComboCentroVotacion', {
    extend: 'Ext.form.ComboBox',

    xtype: 'combocentro',

    fieldLabel  : 'Centro de Votación:',
    name        : 'centrovotacion',
    emptyText:'Selecciona un centro de votación...',
    displayField: 'nombre',
    valueField: 'id',

    initComponent: function(){

      Ext.apply(this, {
        store: Ext.create('ToralVirtual.store.CentroVotacion')
      });


      this.callParent();
    }
});