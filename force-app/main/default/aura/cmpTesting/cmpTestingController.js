({
    handleLoad : function(component, event, helper) {
        // var payload = JSON.parse(JSON.stringify(event.getParams()));
        // var fields = payload.record.fields;
        // fields.Title__c = "I just set this in onload";
        // console.log("onload: ", payload.record.fields);
    },
    handleLoadEdit : function(component, event, helper) {
        // var payload = JSON.parse(JSON.stringify(event.getParams()));
        // var fields = payload.record.fields;
        // fields.Name = "Something here";
        // console.log("onload: ", payload.record.fields);
        component.find("nameField").set("v.value", "hello");
        component.set('v.pseudoInput', component.find('nameField').get("v.value"));
    },
    handleChange : function(component, event, helper) {
        // component.set('v.pseudoInput', component.find('titleField').get("v.value"));
        $A.get('e.force:refreshView').fire();
    },
    handleSubmit : function(component, event, helper) {
        event.preventDefault();       // stop the form from submitting
        var fields = event.getParam('fields');
        fields.Title__c = component.get('v.pseudoInput');
        console.log("fields: ", JSON.parse(JSON.stringify(fields)));
        // component.find('myRecordForm').submit(fields);
    },
    handleSuccess : function(component, event) {
        var xyz = JSON.parse(JSON.stringify(event.getParams()));
        console.log('onsuccess: ', xyz);
    },
    handleShowPopover : function(component, event, helper) {
        component.find('overlayLib').showCustomPopover({
            body: "Popovers are positioned relative to a reference element",
            referenceSelector: ".mypopover",
            cssClass: "popoverclass,no-pointer,cMyCmp"
        }).then(function (overlay) {
            setTimeout(function(){ 
                //close the popover after 3 seconds
                overlay.close(); 
            }, 3000);
        });
    },
    handleTest : function(component,event,helper) {
        console.log("I fired")
        // var editRecordEvent = $A.get("e.force:editRecord");
        // editRecordEvent.setParams({
        //     "recordId": component.get("v.property.Id")
        // });
        // editRecordEvent.fire();
    },
    valueChanged :  function (component, event, helper) {
        console.log('change:::called',event.getParam('value'));
}
})
