Ext.define('ToralVirtual.util.Global', {
    singleton: true,
    config: {

        Produccion:true,

        PathURL: 'http://' + window.location.host + window.location.pathname,

        PathIMG: 'http://' + window.location.host + window.location.pathname + '/app/'

    },
    /*
     * Initialize the config in the constructor
     * */
    constructor: function (config) {
        this.initConfig(config);
    }
});
