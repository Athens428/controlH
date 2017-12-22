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
    appendId: false,
    actionMethods: {
      read: 'GET',
      update: 'POST'
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
        
        return data;
      }
    },
    reader: {
      type: 'json',
      transform: {
        fn: function (data) {
          
          return data;
        },
        scope: this
      }
    }
  }
});