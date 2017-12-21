
Ext.define('controlH.view.audio.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'livingroom',
    requires: [],
    title: 'Living Room',
    listeners: {
        select: 'onItemSelected'
    },
    items: [
        {
            xtype: 'button',
            text: 'Click here',
            handler: function() {
                this.toggle();
            }
        }
    ]
});
