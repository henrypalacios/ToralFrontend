Ext.define('ToralVirtual.view.llamadas.form.ComboEventos', {
    extend: 'Ext.form.ComboBox',

    xtype: 'comboeventos',

    //queryMode: 'remote', //by default

    width:'40%',
    emptyText:'Seleccionar Un evento...',
    displayField: 'nombre',
    valueField: 'id',
  
    pageSize:10,


    initComponent: function(){

      Ext.apply(this, {
        store: Ext.create('ToralVirtual.store.llamadas.Eventos')
      });


      this.callParent();
    }
});