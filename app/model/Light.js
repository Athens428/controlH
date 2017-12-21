Ext.define('controlH.model.Light', {
  extend: 'Ext.data.Model',
  entityName: 'Light',
  requires: [],
  fields: [
    {name: 'entity_id', type: 'string'},
    {name: 'state', type: 'string'}
  ]
});