Ext.define('controlH.store.Entities', {
    extend: 'Ext.data.Store',
    model: 'controlH.model.Entity',
    autoLoad: false,
    listeners: {
        load: function(me, records, successful) {
            var lrPanel = Ext.ComponentQuery.query('livingroom')[0];
            if (lrPanel)
                lrPanel.fireEvent('storeload', records);
        }
    }
});