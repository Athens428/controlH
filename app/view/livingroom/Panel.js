/**
 * This view is an example list of people.
 */
Ext.define('controlH.view.main.Panel', {
    extend: 'Ext.grid.Panel',
    xtype: 'livingroom',

    requires: [
        'controlH.store.Personnel'
    ],

    title: 'Personnel',

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
