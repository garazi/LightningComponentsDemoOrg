({
	doInit: function(component, event, helper) {
		var tempRec = component.find("brokerRecord");
		tempRec.set("v.recordId", component.get("v.recordId"));
		tempRec.reloadRecord();
	}
})
