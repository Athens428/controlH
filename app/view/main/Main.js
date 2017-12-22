/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('controlH.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    itemId: 'mainPanel',
    requires: [
        'Ext.plugin.Viewport',
        'controlH.view.main.MainController'
    ],
    controller: 'main',
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            text: 'controlH',
            flex: 0
        },
        iconCls: 'fa-th-list' //Change this to a custom icon of cH when it is minimized
    },
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },
    responsiveConfig: {
        tall: {
            headerPosition: 'bottom'
        },
        wide: {
            headerPosition: 'left'
        }
    },
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    listeners: {
        loaddata: 'loadStoreData'
    },
    items: [{
            title: 'Living Room',
            iconCls: 'fa-home', //Custom icon?
            reference: 'livingroom'

        }, {
            title: 'Knitting Room',
            iconCls: 'fa-heart', //Custom icon?
            reference: 'knittingroom'

        }, {
            title: 'Bedrooms',
            iconCls: 'fa-bed', //Custom icon?
            reference: 'bedrooms'

        }, {
            title: 'Audio',
            iconCls: 'fa-music', //Custom icon?
            reference: 'music'

        }]
});
