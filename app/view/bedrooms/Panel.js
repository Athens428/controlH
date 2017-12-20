
Ext.define('controlH.view.bedrooms.Panel', {
    extend: 'Ext.grid.Panel',
    xtype: 'bedrooms',

    requires: [
        'controlH.store.Personnel'
    ],

    title: 'Bedrooms',

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
