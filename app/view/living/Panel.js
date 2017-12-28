
Ext.define('controlH.view.audio.Panel', {
    extend: 'Ext.form.Panel',
    xtype: 'livingroom',
    reference: 'livingroom',
    requires: [],
    //controller: '',
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            title: 'Living Room',
            items: [
                {
                    xtype: 'ux-togglebutton',
                    hassId: 'door_bell',
                    type: 'switch',
                    margin: {
                        top: '1%',
                        bottom: '0',
                        left: '50%',
                        right: '0'
                    }
                },
                {
                    xtype: 'label',
                    text: 'Door Bell',
                    margin: {
                        top: '14%',
                        bottom: '0',
                        left: '51%',
                        right: '0'
                    }
                }/*,
                {
                    xtype: 'ux-togglebutton',
                    hassId: 'front_porch_light',
                    type: 'light'
                }*/
            ]
        });
        me.callParent(arguments);
    }
});