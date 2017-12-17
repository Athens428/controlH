/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'controlH.Application',

    name: 'controlH',

    requires: [
        // This will automatically load all classes in the controlH namespace
        // so that application classes do not need to require each other.
        'controlH.*'
    ],

    // The name of the initial view to create.
    mainView: 'controlH.view.main.Main'
});
