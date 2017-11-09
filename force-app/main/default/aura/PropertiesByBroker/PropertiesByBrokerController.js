({
	doInit : function(component, event, helper) {
        var action = component.get("c.getPropertiesByBroker");
		action.setParams({
			BrokerId: component.get("v.recordId")
		})
		action.setCallback(this, function(response) {
			var propertyList = response.getReturnValue();
			component.set("v.propertyRecords", propertyList);
		})
		$A.enqueueAction(action);
	}
})