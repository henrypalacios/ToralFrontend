/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ToralVirtual.Application', {
    extend: 'Ext.app.Application',

    name: 'ToralVirtual',

    stores: [
        'NavigationTree'
    ],

    defaultToken : 'home',

    views: [
        'ToralVirtual.view.login.WindowLogin'
    ],

    launch: function () {
        this.removerMascara();
    },

    init: function(){
        this.enmascararPantalla();
        this.agregarCsrfToken();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Aplicación Actualizada', 'Esta aplicación ha sido actualizada, deseas recargar ahora?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },

    createApplication: function(view) {
        Ext.create({
            xtype: view
        });
    },

    loggedIn: function(){
        var me = this;

        Ext.Ajax.request({
            url: '/auth/loggedin',
            method:'GET',
            success:function(response){
                action.resume();
                me.createApplication('app-main');
            },
            failure:function() {
                me.createApplication('login');
                me.redirectTo('login',false);
            }
        });
    },

    removerMascara: function (){
        var me=this,
            task;

        task = new Ext.util.DelayedTask(function () {

            me.splashscreen.fadeOut({
                duration: 1,
                remove: true
            });

            //Fade out the icon and message
            me.splashscreen.next().fadeOut({
                duration: 1,
                remove: true,
                listeners: { // #1
                    afteranimate: function (el, startTime, eOpts) {
                        me.loggedIn();
                    }
                }
            });

        });

        task.delay(2);
    },

    enmascararPantalla: function() {
        var me = this;

        me.splashscreen = Ext.getBody().mask( // #2
            'Cargando Sistema...', 'splashscreen'
        );

        me.splashscreen.addCls('splashscreen');

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

    },

    agregarCsrfToken: function(){
        var csrfToken = this.getTokenMeta();
        Ext.data.Connection.override({

            request: function(options){
                var me = this;
                if(!options.params)
                    options.params = {};
                options.params._token = csrfToken;

                return me.callOverridden(arguments);
            }
        });
    },

    getTokenMeta: function() {
        var metas = document.getElementsByTagName('meta');

        for (i=0; i<metas.length; i++) {
            if (metas[i].getAttribute("name") == "_token") {
                return metas[i].getAttribute("content");
            }
        }

    }

});