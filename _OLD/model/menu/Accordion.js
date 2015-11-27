Ext.define('ToralVirtual.model.menu.Accordion', {
    extend: 'Ext.data.Model',
    requires: [
      'ToralVirtual.model.menu.TreeNode'
    ],

    fields: [
        { name: 'id', type: 'int' },
        { name: 'text' },
        { name: 'iconCls' },
        { name: 'items'}
    ],

    hasMany: {
      model: 'ToralVirtual.model.menu.TreeNode',
      foreignKey: 'parent_id',
      name: 'items' //#1
    }

});
