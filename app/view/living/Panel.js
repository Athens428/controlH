
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
                    xtype: 'ux-lighttogglebutton',
                    light: 'door_bell'
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
                        dbCom.toggleCls('myimagebuttonon');
                    }
                }
            }
        });
        me.callParent(arguments);
    }
});