
Ext.define('controlH.view.audio.Panel', {
    extend: 'Ext.form.Panel',
    xtype: 'livingroom',
    reference: 'livingroom',
    requires: [],
    //controller: '',
    initComponent: function () {
        var me = this;
        var entityStore = Ext.getStore('entities');

        //initialize buttons
        var doorBell = entityStore.getById('switch.door_bell');

        Ext.apply(me, {
            title: 'Living Room',
            items: [
                {
                    xtype: 'button',
                    itemId: 'door_bell',
                    enableToggle: true,
                    text: doorBell.get('state'),
                    pressed: (doorBell.get('state') === 'ON') ? true : false,
                    toggleHandler: function (button, pressed) {
                        var text = (pressed) ? 'ON' : 'OFF';
                        doorBell.set('state', text);
                        //console.log(entityStore);
                        doorBell.save({
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
                }
            ],
            listeners: {
                storeload: function (record,  fields) {
                    doorBell = entityStore.getById('switch.door_bell');
                    var dbCom = me.down('#door_bell');
                    if (doorBell && (doorBell.data.state.toUpperCase() !== dbCom.getText()))
                    {
                        var state = doorBell.data.state.toUpperCase();
                        dbCom.setText(state);
                        dbCom.setPressed((state === 'ON' ? true : false));
                    }
                }
            }
        });
        me.callParent(arguments);
    }
});