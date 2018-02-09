({
    updateRecord : function(component, event, helper) {
        var rec = component.find("aRecord");
        component.set("v.recordId", "v.theRecord.Id");
        rec.reloadRecord();
    }
})
