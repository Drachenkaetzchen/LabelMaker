Ext.onReady(function(){
	var simple = Ext.create('Ext.form.Panel', {
        frame:true,
        title: 'LabelMaker',
        bodyStyle:'padding:5px 5px 0',
        width: 600,
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
        	xtype: 'fieldcontainer',
        	layout: 'hbox',
        	labelWidth: 50,
        	items: [{
        		fieldLabel: 'Das Teil',
        		xtype: 'textfield',
                name: 'name',
                labelWidth: 60,
                allowBlank:false,
                flex: 1
        	},{
        		margins: '0 0 0 5',
        		fieldLabel: 'ist',
        		labelWidth: 15,
        		xtype: 'combobox',
        		store: {
        			fields: ['name'],
        			data: [{name: '&nbsp;'},{name: 'public domain'},{name: 'eine Leihgabe'}, {name: 'privat'}]
        		},
        		forceSelection: true,
        		editable: false,
        		displayField: 'name',
        		valueField: 'name',
        		queryMode: 'local',
                allowBlank:false,
                flex: 1
        	}]
        },{
        	xtype: 'fieldcontainer',
        	layout: 'hbox',
        	labelWidth: 50,
        	items: [{
        		fieldLabel: 'Es gehört',
        		xtype: 'textfield',
                name: 'owner',
                labelWidth: 60,
                value: 'RaumZeitLabor',
                allowBlank:false,
                flex: 1
        	}]
        },{
        	xtype: 'fieldset',
        	title: 'Verwendung',
        	items: [
    	{
                    // Use the default, automatic layout to distribute the controls evenly
                    // across a single row
                    xtype: 'checkboxgroup',
                    cls: 'x-check-group-alt',
                    columns: 2,
                    items: [
                        {boxLabel: 'frei für jeden', name: 'cb-auto-1'},
                        {boxLabel: 'vorsichtig', name: 'cb-auto-2'},
                        {boxLabel: 'nach Einführung', name: 'cb-auto-3'},
                        {boxLabel: 'nach Rücksprache mit dem Eigentümer', name: 'cb-auto-4'},
                        {boxLabel: 'nach Zahlung', name: 'cb-auto-5'},
                        {boxLabel: 'gar nicht', name: 'cb-auto-6'}
                    ]
                }]
        	        
        	
        }],

        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
    });

    simple.render("label-form");
});