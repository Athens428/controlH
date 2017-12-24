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
    }/*,
    proxy: {
        type: 'rest',
        useDefaultXhrHeader: false,
        appendId: true,
        actionMethods: {
            read: 'GET',
            update: 'POST',
            create: 'POST'
        },
        headers: {
            'Accept': 'application/json',
            'x-ha-access': 'BHsj12!@'
        },
        writer: {
            writeAllFields: true,
            allDataOptions: {
                persist: true
            },
            transform: function (data, request) {
                delete data.last_changed;
                delete data.last_updated;
                data.state = data.state.toLowerCase();
                return data;
            }
        },
        reader: {
            type: 'json',
            transform: {
                fn: function (data) {
                    //console.log(data);
                    if (data instanceof Array)
                    {
                        data.forEach(function(ent) {
                            ent.state = ent.state.toUpperCase();
                        });
                    }
                    else 
                    {
                        data.state = data.state.toUpperCase();
                    }
                    
                    return data;
                },
                scope: this
            }
        }
    }*/
});