/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('controlH.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    
    init: function() {
        
    },
    loadStoreData: function(store) {
        var me = this;
        me.getView().items.items[0].add({
            xtype: 'livingroom',
            entitiesStore: store
        });
       
        
    }
});
