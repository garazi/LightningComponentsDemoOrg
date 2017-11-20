({
	doInit : function(component, event, helper) {
        component.set("v.columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"Phone", fieldName:"Phone", type:"phone", sortable:"true"}
        ])
		var action = component.get("c.getLeads");
        action.setCallback(this, function(response){
            var leads = response.getReturnValue();
            component.set("v.leads", leads);
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