({
    testing : function(component, event, helper) {
        var foo = new Date();
        console.log("now: ", Date.parse(foo))
        var prop = component.get("v.property")
        var tmp = Date.parse(foo) - Date.parse(prop.Date_Listed__c)
        console.log("tmp: ", tmp)
        var bar = Math.floor(tmp/(24 * 60 * 60 * 1000));
        console.log("b: ", bar)
    }
})
