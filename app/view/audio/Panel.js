
Ext.define('controlH.view.living.Panel', {
    extend: 'Ext.grid.Panel',
    xtype: 'audio',

    requires: [
        'controlH.store.Personnel'
    ],

    title: 'Audio',

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
