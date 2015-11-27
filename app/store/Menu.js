Ext.define('ToralVirtual.store.Menu', {
  extend: 'Ext.data.Store',

  requires: [
    'ToralVirtual.util.Util' //#1
  ],

  model: 'ToralVirtual.model.menu.Accordion', //#2
  
  proxy: {

    type: 'ajax',
    url: 'server/menu2.json',

    reader: { 
      type: 'json',
      rootProperty: 'data'
    },

    listeners: {

      exception: function(proxy, response, operation){ //#6
        ToralVirtual.util.Util.showErrorMsg(response.responseText);
      }

    }

  }
});