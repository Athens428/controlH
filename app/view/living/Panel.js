
Ext.define('controlH.view.audio.Panel', {
    extend: 'Ext.panel.Panel',
    xtype: 'livingroom',
    requires: [],
    //controller: '',
    initComponent: function () {
        var me = this;
        var entityStore = me.entitiesStore;

        Ext.apply(me, {
            title: 'Living Room',
            items: [
                {
                    xtype: 'button',
                    enableToggle: true,
                    text: entityStore.getById('switch.door_bell').get('state').toUpperCase(),
                    toggleHandler: function (button, pressed) {
                        var record = entityStore.getById('switch.door_bell');
                        var text = (pressed) ? 'ON' : 'OFF';
                        record.set('state', text);
                        record.save({
                            success: function () {
                                button.setText(text);
                            },
                            failure: function () {
                                Ext.toast('Error setting button');
                            },
                            scope: me
                        });
                    }
                }
            ]
        });
        me.callParent(arguments);
    }
});