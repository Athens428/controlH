
Ext.define('controlH.view.knitting.Panel', {
    extend: 'Ext.grid.Panel',
    xtype: 'knitting',

    requires: [
        'controlH.store.Personnel'
    ],

    title: 'Knitting Room',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
