/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'ToralVirtual',

    extend: 'ToralVirtual.Application',

    requires: [
        'ToralVirtual.view.main.Main',
        'ToralVirtual.view.main.ViewportModel',
        'ToralVirtual.view.main.MainController',
        'ToralVirtual.view.padron.PadronForm',
        'ToralVirtual.view.main.MainContainerWrap',
        'ToralVirtual.view.llamadas.LlamadasList',
        'ToralVirtual.view.llamadas.form.ComboEventos',
        'ToralVirtual.view.llamadas.ListLlamadasGrid',
        'ToralVirtual.store.llamadas.ListaLlamadas',
        'ToralVirtual.store.llamadas.Eventos'
    ],

    autoCreateViewport: false

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    //mainView: 'ToralVirtual.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to ToralVirtual.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
