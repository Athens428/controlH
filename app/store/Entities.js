Ext.define('controlH.store.Entities', {
    extend: 'Ext.data.Store',
    model: 'controlH.model.Entity',
    autoLoad: false,
    listeners: {
        load: function(me, records, successful) {
            var test = Ext.ComponentQuery.query('app-main')[0];
            test.fireEvent('loaddata', me);
        }
    }
});