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

    items: [{
        title: 'Living Room',
        iconCls: 'fa-home', //Custom icon?
        items: [{
            xtype: 'livingroom'
        }]
    }, {
        title: 'Knitting Room',
        iconCls: 'fa-heart', //Custom icon?
        items: [{
            xtype: 'knitting'
        }]
    }, {
        title: 'Bedrooms',
        iconCls: 'fa-bed', //Custom icon?
        items: [{
            xtype: 'bedrooms'
        }]
    }, {
        title: 'Audio',
        iconCls: 'fa-music', //Custom icon?
        items: [{
            xtype: 'audio'
        }]
    }]
});
