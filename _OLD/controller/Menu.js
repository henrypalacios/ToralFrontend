Ext.define('ToralVirtual.controller.Menu', {
    extend: 'Ext.app.Controller',

    stores: [
        'Menu'
    ],

    init: function(application) {

      this.control({

        "menutree": {
          itemclick: this.onTreePanelItemClick
        },
        "mainmenu": {
          render: this.renderDynamicMenu
        }

      });

    },

    renderDynamicMenu: function(view, options) {
      var dynamicMenus = [];

      view.body.mask('Cargando Modulos... Espera…');

      this.getMenuStore().load(function(records, op, success){

          Ext.each(records, function(root){
            console.log(root);
              var menu = Ext.create('ToralVirtual.view.menu.Tree',{
                  title: root.get('text'),
                  iconCls: root.get('iconCls')
              });

              /*var treeNodeStore = root.items(),
              nodes = [],
              item;

              for (var i=0; i<treeNodeStore.getCount(); i++){
                  item = treeNodeStore.getAt(i);
                  nodes.push({
                      text: 'text',
                      leaf: true,
                      glyph: item.get('iconCls'),
                      id: item.get('id'),
                      className: item.get('className')
                  });
              }

              menu.getRootNode().appendChild(nodes);*/
              dynamicMenus.push(menu);

          });

          view.add(dynamicMenus);
          view.body.unmask();

      });

    },

    onTreePanelItemClick: function(view, record, item, index, event, options){
    }
});
