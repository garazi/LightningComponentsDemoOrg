({
    doIt: function(component,event,helper) {
        var f = component.find("rtCol");
        $A.util.toggleClass(f, "slds-hide");     
    }
})