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

    views: [
        'ToralVirtual.view.login.WindowLogin',
        'ToralVirtual.view.main.Main'
    ],
    
    launch: function () {
        var me = this;
        var loggedIn;

        loggedIn = localStorage.getItem("ToralLoggedIn");

        var task = new Ext.util.DelayedTask(function() { 

            me.splashscreen.fadeOut({
                duration: 1,
                remove:true
            });

            //Fade out the icon and message
            me.splashscreen.next().fadeOut({
                duration: 1,
                remove:true,
                listeners: { // #1
                    afteranimate: function(el, startTime, eOpts ){//#2
                                Ext.create({
                                    xtype: loggedIn ? 'app-main' : 'login'
                                });
                    }
                }
            });


        });

        task.delay(1); 

    },

    init: function(){

        this.enmascararPantalla();

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

    enmascararPantalla: function() {
        var me = this;

        me.splashscreen = Ext.getBody().mask( // #2
            'Cargando Sistema...', 'splashscreen'
        );

        me.splashscreen.addCls('splashscreen');

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });

    }
});
