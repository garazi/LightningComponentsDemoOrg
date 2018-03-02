({
    doInit: function(component, event, helper) {
        console.log('starting:', component.get("v.recordId"));
        var actions = [
            { label: 'Edit details', name: 'edit_details' },
            { label: 'Delete', name: 'delete' }
        ];
        // define grid columns
        var gridColumns = [
            {
                type: 'text',
                fieldName: 'Name',
                label: 'Name'
            },
            {
                type: 'email',
                fieldName: 'Email',
                label: 'E-mail'
            },
            { type: 'action', typeAttributes: { rowActions: actions } }
        ];
        component.set('v.gridColumns', gridColumns);
        
        // retrieve contacts
        var action = component.get("c.getContacts");
        action.setParams({
            AccountId: component.get("v.recordId")
        })
        action.setCallback(this, function(response) {
            var contacts = response.getReturnValue();
            var gridData = helper.normalizeContactData(contacts);
            console.log('!!! Grid data => ', gridData);
            component.set('v.gridData', gridData);
        })
        $A.enqueueAction(action);
    },
    handleRowAction: function (cmp, event, helper) {
        cmp.set("v.showDialog", "true");
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'edit_details':
                cmp.set("v.selectedRecord", row.Id)
                console.log("this: ", row.Id)
                var tempRec = cmp.find("tmp");
                tempRec.set("v.recordId", row.Id);
                tempRec.reloadRecord();
                break;
            case 'delete':
                var rows = cmp.get('v.contactRecords');
                var rowIndex = rows.indexOf(row);
                rows.splice(rowIndex, 1);
                cmp.set('v.contactRecords', rows);
                break;
        }
    },
    doReload : function(component,evt,helper) {
        // component.set("v.showDialog", "false")
        var action = component.get("c.getContacts");
        action.setParams({
            AccountId: component.get("v.recordId")
        })
        action.setCallback(this, function(response) {
            var contacts = response.getReturnValue();
            var gridData = helper.normalizeContactData(contacts);
            console.log('!!! Grid data => ', gridData);
            component.set('v.gridData', gridData);
            console.log('foo: ',contacts);
        })
        $A.enqueueAction(action);
    }
})