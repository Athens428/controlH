
Ext.define('controlH.view.audio.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'livingroom',
    requires: [],
    //controller: '',
    initComponent: function () {
        var me = this;
        me.entities = {};
        console.log(Ext.getStore('entities'));
        /*Ext.getStore('entities').each(function (item) {
         me.entities[item.entity_id] = item.state;
         });*/
        Ext.apply(me, {
            title: 'Living Room',
            listeners: {
                
            },
            items: [
                {
                    xtype: 'button',
                    enableToggle: true,
                    text: 'OFF',
                    //text: me.entities['switch.door_bell'].toUpperCase(),
                    toggleHandler: function (button, pressed) {
                        if (pressed) {
                            button.setText('ON');
                        } else {
                            button.setText('OFF');
                            ;
                        }
                    }
                }
            ]
        });
        me.callParent(arguments);
    }
});