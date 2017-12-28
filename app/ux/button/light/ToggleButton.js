/* global Ext */

Ext.define('controlH.ux.LightToggleButton', {
    extend: 'Ext.Button',
    xtype: 'ux-lighttogglebutton',

    initComponent: function () {
        var me = this;
        var light = me.light
        var entityStore = Ext.getStore('entities');
        var obj = entityStore.getById('switch.' + light);

        Ext.apply(me, {
            xtype: 'button',
            itemId: light,
            text: obj.get('state'),
            pressed: false,
            enableToggle: true,
            cls: 'myimagebuttonoff',
            listeners: {
                beforerender: function () {
                    //me.toggleCls('myimagebuttonon');
                    me.setPressed((obj.get('state') === 'ON') ? true : false);
                    if (me.pressed) me.toggleCls('myimagebuttonon');
                }
            },
            handler: function() {
                me.toggleCls('myimagebuttonon');
            },
            toggleHandler: function (button, pressed) {
                var text = (pressed) ? 'ON' : 'OFF';
                obj.set('state', text);
                obj.save({
                    success: function () {
                        button.setText(text);
                    },
                    failure: function () {
                        Ext.toast('Error setting button');
                        button.setPressed(!pressed);
                    },
                    scope: me
                });
            }
        });

        me.callParent(arguments);
    }
});