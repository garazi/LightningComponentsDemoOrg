({
    doInit : function(component, event, helper) {
        var action = component.get("c.getCurrentUser");
        action.setCallback(this, function(response) {
            var user = response.getReturnValue();
            component.set("v.currentUser", user.FirstName);
        })
        $A.enqueueAction(action);

        var num = component.get("c.randomWithLimit");
        num.setCallback(this, function(response) {
            var n = response.getReturnValue();
            component.set("v.randomNum", n);
        })
        $A.enqueueAction(num);
    }
})
