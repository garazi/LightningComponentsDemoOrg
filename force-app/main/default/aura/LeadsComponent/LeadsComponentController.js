({
	doInit : function(component, event, helper) {
        var actions = [
            { label: 'Show details', name: 'show_details' },
            { label: 'Delete', name: 'delete' }
        ];
        component.set("v.columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"Phone", fieldName:"Phone", type:"phone", sortable:"true"},
            {label:"Id", fieldName:"Id", type:"url"},
            { type: 'action', typeAttributes: { rowActions: actions } }
        ])
		var action = component.get("c.getLeads");
        action.setCallback(this, function(response){
            var leads = response.getReturnValue();
            leads.forEach(element => {
                element.Id = "/foo/" + element.Id
            });
            component.set("v.leads", leads);
            console.log("foobar: ", component.get("v.leads"));
        })
        $A.enqueueAction(action);
    },
    doSelect: function(component,event,helper){
        var selectedRows = event.getParam('selectedRows');
        for (var i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].LastName);
        }
    },
    updateColumnSorting: function(component,event,helper) {
        var fieldName = event.getParam('fieldName');
        var sortDirection = event.getParam('sortDirection');
        // assign the latest attribute with the sorted column fieldName and sorted direction
        component.set("v.sortedBy", fieldName);
        component.set("v.sortedDirection", sortDirection);
        helper.sortData(component, fieldName, sortDirection);
    }
})