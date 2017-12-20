
Ext.define('controlH.view.audio.Panel', {
    extend: 'Ext.grid.Panel',
    xtype: 'livingroom',

    requires: [
        'controlH.store.Personnel'
    ],

    title: 'Living Room',

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
