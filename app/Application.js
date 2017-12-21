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

    /*launchL function() {
        controlH.getStates = function () {
            return controlH.services;
        };
    },

    buildStores: function () {
        var stateUrl = controlH.getStates().lights;
        Ext.Ajax.request({
            url: stateUrl,
            method: 'GET',
            success: function (response) {
                if (response.responseText) {
                    var responseText = Ext.decode(response.responseText);
                    if (responseText["_links"]) {
                        var links = responseText["_links"];

                        Ext.create('STAKE.store.AORs', {
                            storeId: 'aors',
                            autoLoad: true
                        }).getProxy().setApi({
                            create: links.AorSave.href,
                            read: links.AorFindAll.href,
                            update: links.AorSave.href,
                            destroy: links.AorDelete.href
                        });

                        Ext.create('STAKE.store.Regions', {
                            storeId: 'regions',
                            autoLoad: true
                        }).getProxy().setApi({
                            create: links.RegionSave.href,
                            read: links.RegionFindAll.href,
                            update: links.RegionSave.href,
                            destroy: links.RegionDelete.href
                        });

                        Ext.create('STAKE.store.Bases', {
                            storeId: 'bases',
                            autoLoad: true
                        }).getProxy().setApi({
                            create: links.BaseSave.href,
                            read: links.BaseFindAll.href,
                            update: links.BaseSave.href,
                            destroy: links.BaseDelete.href
                        });

                        Ext.create('STAKE.store.Operations', {
                            storeId: 'operations',
                            autoLoad: true
                        }).getProxy().setApi({
                            create: links.OperationSave.href,
                            read: links.OperationFindAll.href,
                            update: links.OperationSave.href,
                            destroy: links.OperationDelete.href
                        });

                        Ext.create('STAKE.store.PlatformTypeCategories', {
                            storeId: 'platformTypeCategories',
                            autoLoad: true
                        }).getProxy().setApi({
                            read: links.PlatformTypeCategoryFindAll.href
                        });

                        Ext.create('STAKE.store.PlatformStatuses', {
                            storeId: 'platformStatuses',
                            autoLoad: true
                        }).getProxy().setApi({
                            read: links.PlatformStatusFindAll.href
                        });

                        Ext.create('STAKE.store.SensorTypeDisciplines', {
                            storeId: 'sensorTypeDisciplines',
                            autoLoad: true
                        }).getProxy().setApi({
                            read: links.SensorTypeDisciplineFindAll.href
                        });

                    }
                }
            },
            failure: function (response) {
                console.log("Error retrieving operations links");
            }
        });
    }*/
});
