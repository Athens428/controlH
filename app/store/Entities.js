Ext.define('controlH.store.Entities', {
    extend: 'Ext.data.Store',
    model: 'controlH.model.Entity',
    autoLoad: false,
    listeners: {
        load: function (me, records, successful) {
            //fire event on panel items when store loads!
            var panel = Ext.ComponentQuery.query('app-main')[0];
            if (panel)
            {
                panel.items.each(function (pItem) {
                    if (pItem)
                    {
                        if(pItem.items.getAt(0)){
                            pItem.items.getAt(0).items.each(function(item) {
                                item.fireEvent('storeloaded');
                            });
                        }
                    }
                });
            }
        }
    }
});