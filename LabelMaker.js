var finalText;

Ext.onReady(function(){
	var simple = Ext.create('Ext.form.Panel', {
        frame:true,
        id: "LabelMaker",
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
        		listeners: {
        			change: onFormChange
        		},
                name: 'name',
                labelWidth: 60,
                allowBlank:false,
                flex: 1
        	},{
        		flex: 1.4,
        		fieldLabel: 'ist',
        		margins: '0 0 0 5',
        		labelWidth: 20,
            	xtype: 'radiogroup',
                cls: 'x-radio-group-alt',
                columns: 2,
                listeners: {
        			change: onFormChange
        		},
                items: [
                    {boxLabel: '&lt;egal&gt;', inputValue: "", checked: true, name: 'type'},
                    {boxLabel: 'public domain', inputValue: "public", name: 'type'},
                    {boxLabel: 'eine Leihgabe', inputValue: "Leihgabe", name: 'type'},
                    {boxLabel: 'privat', inputValue: "privat", name: 'type'}
                ]
            	        
            	
            }]
        },{
        	xtype: 'fieldcontainer',
        	layout: 'hbox',
        	labelWidth: 50,
        	items: [{
        		fieldLabel: 'Es gehört',
        		xtype: 'textfield',
        		listeners: {
        			change: onFormChange
        		},
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
                    listeners: {
            			change: onFormChange
            		},
                    items: [
                        {boxLabel: 'frei für jeden', inputValue: "von allen", name: 'use'},
                        {boxLabel: 'vorsichtig', inputValue: "vorsichtig", name: 'use'},
                        {boxLabel: 'nach Einführung', inputValue: "nach Einführung", name: 'use'},
                        {boxLabel: 'nach Rücksprache mit dem Eigentümer', inputValue: "nach Rücksprache mit Eigentümer", name: 'use'},
                        {boxLabel: 'nach Zahlung', inputValue: "nach Zahlung", name: 'use'},
                        {boxLabel: 'gar nicht', inputValue: "gar nicht", name: 'use'}
                    ]
                }]
        	        
        	
        },{
        	xtype: 'fieldset',
        	title: 'Darf',
        	items: [
    	{
                    // Use the default, automatic layout to distribute the controls evenly
                    // across a single row
                    xtype: 'radiogroup',
                    cls: 'x-radio-group-alt',
                    columns: 2,
                    listeners: {
            			change: onFormChange
            		},
                    items: [
                        {boxLabel: '&lt;egal&gt;', checked: true, inputValue: "", name: 'may'},
                        {boxLabel: 'Darf ausgeliehen werden (nach Rücksprache)', inputValue: "Es darf nach Rücksprache ausgeliehen werden. ", name: 'may'},
                        {boxLabel: 'Darf zerstört werden', inputValue: "Es darf zerstört werden. ", name: 'may'},
                        {boxLabel: 'Darf ausgeliehen werden', inputValue: "Es darf ausgeliehen werden. ", name: 'may'},
                    ]
                }]
        	        
        	
        },{
        	xtype: 'fieldset',
        	title: 'Wenn defekt',
        	items: [
    	{
                    // Use the default, automatic layout to distribute the controls evenly
                    // across a single row
                    xtype: 'radiogroup',
                    cls: 'x-radio-group-alt',
                    columns: 2,
                    listeners: {
            			change: onFormChange
            		},
                    items: [
                           {boxLabel: '&lt;egal&gt;', checked: true, inputValue: " ", name: 'defekt'},
                        {boxLabel: 'wegwerfen', inputValue: "Bei Defekt: Wegwerfen. ", name: 'defekt'},
                        {boxLabel: 'reparieren>dann wegwerfen', inputValue: "Bei Defekt: reparieren>wegwerfen. ", name: 'defekt'},
                        {boxLabel: 'reparieren>Eigentümer benachrichtigen', inputValue: "Bei Defekt: reparieren>Eigentümer benachrichtigen. ",name: 'defekt'},
                        {boxLabel: 'Eigentümer benachrichtigen', inputValue: "Bei Defekt: Eigentümer benachrichtigen. ",name: 'defekt'},
                        {boxLabel: 'Ersatz kaufen', inputValue: "Bei Defekt: Ersatz kaufen. ",name: 'defekt'},
                    ]
                }]
        	        
        	
        },{
            // Use the default, automatic layout to distribute the controls evenly
            // across a single row
            xtype: 'radiogroup',
            cls: 'x-radio-group-alt',
            fieldLabel: "Wenn es nervt",
            columns: 2,
            listeners: {
    			change: onFormChange
    		},
            labelWidth: 100,
            items: [
                   {boxLabel: '&lt;egal&gt;', checked: true, inputValue: "", name: 'annoying'},
                {boxLabel: 'wegwerfen', inputValue: "Wenn es stört: wegwerfen. ", name: 'annoying'},
                {boxLabel: 'Eigentümer benachrichtigen', inputValue: "Wenn es stört: Eigentümer benachrichtigen. ", name: 'annoying'},
                {boxLabel: 'ignorieren', inputValue: "Wenn es stört: ignorieren. ", name: 'annoying'},
            ]
        },{
        	xtype: 'fieldcontainer',
        	layout: 'hbox',
        	labelWidth: 50,
        	items: [{
        		xtype: 'textfield',
        		listeners: {
        			change: onFormChange
        		},
        		labelWidth: 100,
        		name: 'value',
        		fieldLabel: 'Wert (ca)'
        	},{
        		xtype: 'textfield',
        		listeners: {
        			change: onFormChange
        		},
        		name: 'existssince',
        		labelWidth: 100,
        		fieldLabel: 'Es existiert seit'
        	}]
        },{
        	xtype: 'textfield',
        	listeners: {
    			change: onFormChange
    		},
        	labelWidth: 100,
        	name: 'comment',
        	fieldLabel: 'Kommentar'
        },{
        	html: '<div style="font-family: courier; font-size: 8pt;width:62mm;height:32mm;border: 1px solid black;" id="preview">&nbsp;</div>'
        }],

        buttons: [{
            text: 'Print',
            listeners: {
        		click: onFormSubmit
        	}
        }]
    });

    simple.render("label-form");
});

function onFormSubmit () {
	Ext.Ajax.request({
	    url: 'test.php',
	    params: {
		text: finalText
	}});
}

function onFormChange () {
	var text = "";
	var values = Ext.getCmp("LabelMaker").getForm().getValues();
	
	var val1 = new Array();
	
	console.log(values);
	
	if (values.type != "") {
		val1.push("ist " + values.type);
	}
	
	if (values.owner != "") {
		val1.push("gehört "+values.owner);
	}
	
	var sect1 = val1.join(" und ");
	if (sect1 != "") {
		if (values.name != "") {
			text += values.name+ " ";
		}
		sect1 += ". ";
	} else {
		if (values.name != "") {
			text += "Ich bin ein(e) "+values.name+ ". ";
		}
	}
	
	text += sect1;
	
	if (typeof values.use == "object") {
		text += "Es darf "+values.use.join(" ")+" verwendet werden. ";
	} else if (typeof values.use == "string"){
		text += "Es darf "+values.use+" verwendet werden. ";
	}
	
	if (values.may != "") {
		text += values.may;
	}
	
	if (values.defekt != "") {
		text += values.defekt;
	}
	
	if (values.annoying != "") {
		text += values.annoying;
	}
	
	if (values.existssince != "") {
		text += "Es existiert seit "+values.existssince+". ";
	}
	
	if (values.value != "") {
		text += "Wert ca. "+values.value+". ";
	}
	
	if (values.comment != "") {
		text += values.comment;
	}
	
	finalText = text; 
	Ext.get("preview").dom.innerHTML = text;
}