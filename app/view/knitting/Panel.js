
Ext.define('controlH.view.knitting.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'knitting',
    requires: [],
    title: 'Knitting Room',
    listeners: {
        select: 'onItemSelected'
    }
});
