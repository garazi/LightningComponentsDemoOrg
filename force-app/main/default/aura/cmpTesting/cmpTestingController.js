({
    testing : function(component, event, helper) {
        var before = component.find("beds").get("v.value");
        console.log("Before: ", before);
        component.find("beds").set("v.value", "");
        var after = component.find("beds").get("v.value");
        console.log("After: ", after);
    }
})
