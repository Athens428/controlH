Ext.define('controlH.store.Lights', {
  extend: 'Ext.data.Store',
  model: 'controlH.model.Light',
  storeId: 'lights',
  autoLoad: false
});