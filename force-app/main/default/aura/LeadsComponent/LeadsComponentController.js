({
	doInit : function(component, event, helper) {
        component.set("v.columns", [
            {label:"First Name", fieldName:"FirstName", type:"text"},
            {label:"Last Name", fieldName:"LastName", type:"text"},
            {label:"Phone", fieldName:"Phone", type:"phone"}
        ])
		var action = component.get("c.getLeads");
        action.setCallback(this, function(response){
            var leads = response.getReturnValue();
            component.set("v.leads", leads);
        })
        $A.enqueueAction(action);
	}
})