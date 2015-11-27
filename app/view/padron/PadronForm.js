
Ext.define("ToralVirtual.view.padron.PadronForm",{
    extend: "Ext.panel.Panel",

    requires: [
        "ToralVirtual.view.padron.PadronFormController",
        "ToralVirtual.view.padron.PadronFormModel"
    ],

    controller: "padron-padronform",
    viewModel: {
        type: "padron-padronform"
    },

    html: "Padrón"
});
