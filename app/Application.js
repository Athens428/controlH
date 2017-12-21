/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('controlH.Application', {
    extend: 'Ext.app.Application',

    name: 'controlH',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
                function (choice) {
                    if (choice === 'yes') {
                        window.location.reload();
                    }
                }
        );
    },

    launch: function() {
        var me = this;
        controlH.getApi = function () {
            return controlH.api;
        };
        me.buildStores();
    },

    buildStores: function () {
        var stateUrl = controlH.getApi().states;
        Ext.Ajax.request({
            url: stateUrl,
            method: 'GET',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'x-ha-access': 'BHsj12!@'
            },
            success: function (response) {
                if (response.responseText) {
                    var responseText = Ext.decode(response.responseText);
                    console.log(responseText);
                    /*if (responseText["_links"]) {
                        var links = responseText["_links"];

                        Ext.create('STAKE.store.Regions', {
                            storeId: 'regions',
                            autoLoad: true
                        }).getProxy().setApi({
                            create: links.RegionSave.href,
                            read: links.RegionFindAll.href,
                            update: links.RegionSave.href,
                            destroy: links.RegionDelete.href
                        });
                    }*/
                }
            },
            failure: function (response) {
                console.log("Error retrieving operations links");
            }
        });
    }
});
