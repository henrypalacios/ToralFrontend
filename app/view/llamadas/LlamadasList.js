
Ext.define("ToralVirtual.view.llamadas.LlamadasList",{
    extend: "Ext.panel.Panel",

    requires: [
        "ToralVirtual.view.llamadas.LlamadasListController",
        "ToralVirtual.view.llamadas.LlamadasListModel"
    ],

    controller: "llamadas-llamadaslist",
    viewModel: {
        type: "llamadas-llamadaslist"
    },

    html: "Llamadas"
});
