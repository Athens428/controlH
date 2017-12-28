/* global Ext */

Ext.define('controlH.ux.ToggleButton', {
    extend: 'Ext.Button',
    xtype: 'ux-togglebutton',

    initComponent: function () {
        var me = this;
        var hassId = me.hassId;
        var type = me.type;
        var entityStore = Ext.getStore('entities');
        var obj = entityStore.getById(type + '.' + hassId);

        Ext.apply(me, {
            xtype: 'button',
            itemId: hassId,
            height: 100,
            width: 100,
            text: obj.get('state'),
            pressed: false,
            enableToggle: true,
            cls: 'buttonoff',
            listeners: {
                beforerender: function () {
                    me.setPressed((obj.get('state') === 'ON') ? true : false);
                    if (me.pressed) me.toggleCls('buttonon');
                },
                storeloaded: function () {
                    var ent = entityStore.getById(type + '.' + hassId);
                    var dbCom = me;
                    if (ent && (ent.data.state.toUpperCase() !== dbCom.getText()))
                    {
                        var state = ent.data.state.toUpperCase();
                        dbCom.setText(state);
                        dbCom.setPressed((state === 'ON' ? true : false));
                        dbCom.toggleCls('buttonon');
                    }
                }
            },
            handler: function() {
                me.toggleCls('buttonon');
            },
            toggleHandler: function (button, pressed) {
                button.setText((pressed) ? 'ON' : 'OFF');
                obj.set('state', button.getText());
                obj.save({
                    failure: function () {
                        Ext.toast('Error setting button');
                        button.setPressed(!pressed);
                        button.setText((pressed) ? 'ON' : 'OFF');
                    },
                    scope: me
                });
            }
        });

        me.callParent(arguments);
    }
});