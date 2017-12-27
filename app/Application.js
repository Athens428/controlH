/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('controlH.Application', {
    extend: 'Ext.app.Application',
    name: 'controlH',
    //mainView: 'controlH.view.main.Main',
    quickTips: false,
    stores: [
        'controlH.store.Entities'
    ],
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update',
                'This application has an update, reload?',
                function (choice) {
                    if (choice === 'yes') {
                        //window.location.reload();
                        console.log('reloaded');
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
        var me = this;
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
                        storeId: 'entities'
                    }).getModel().getProxy().setApi({
                        create: stateUrl,
                        read: stateUrl,
                        update: stateUrl,
                        destroy: stateUrl
                    });

                    //load the store and set main view once loaded
                    Ext.getStore('entities').load({
                        callback: function(records, operation, success) {
                            me.setMainView('controlH.view.main.Main');
                        }
                    });
                    
                }
            },
            failure: function (response) {
                console.log("Error during API call");
            }
        });
        
        //Start polling
        var reloadStore = {
            run: function() {
                var store = Ext.getStore('entities');
                if (store) store.load();
            },
            interval: 15000
        };
        Ext.TaskManager.start(reloadStore);
    }
});
