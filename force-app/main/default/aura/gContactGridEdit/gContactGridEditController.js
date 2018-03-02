({
	editRecord: function(component, event, helper) {
		helper.showHide(component);
	},
    toggleDialog : function(component, event, helper) {
        helper.showHideModal(component);
    },
	fireToast: function(component,event,helper) {
		var toastEvent = $A.get("e.force:showToast");
		toastEvent.setParams({
			"title": "Success!",
			"message": "The contact's info has been updated.",
			"type": "success"
		});
		toastEvent.fire();
		helper.showHideModal(component);
	}
})