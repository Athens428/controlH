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
    ]
});