/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('controlH.Application', {
    extend: 'Ext.app.Application',
    name: 'controlH',
    quickTips: false,
    stores: [
        'controlH.store.Entities'
    ],
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update',
                'This application has an update, reload?',
                function (choice) {
                    if (choice === 'yes') {
                        window.location.reload();
                    }
                }
        );
    },
    launch: function () {
        var me = this;
        controlH.getApi = function () {
            return controlH.api;
        };
        me.buildStores();
    },
    buildStores: function () {
        var baseUrl = controlH.getApi().base;
        var stateUrl = controlH.getApi().states;
        Ext.Ajax.request({
            url: baseUrl,
            method: 'GET',
            headers: {
                //'Content-Type': 'application/json',
                'x-ha-access': 'BHsj12!@'
            },
            success: function (response) {
                if (response.responseText) {
                    var responseText = Ext.decode(response.responseText);
                    //Entity Store
                    Ext.create('controlH.store.Entities', {
                        storeId: 'entities',
                        autoLoad: true,
                        autoSync: true
                    }).getModel().getProxy().setApi({
                        read: stateUrl
                    });
                }
            },
            failure: function (response) {
                console.log("Error during API call");
            }
        });
    }
});
