Ext.define('controlH.model.Entity', {
    extend: 'Ext.data.Model',
    entityName: 'Entity',
    requires: [],
    idProperty: 'entity_id',
    fields: [
        {name: 'state', type: 'string'},
        {name: 'last_changed', type: 'auto'},
        {name: 'last_updated', type: 'auto'},
        {name: 'attributes', type: 'auto'}
    ],
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
    }
});