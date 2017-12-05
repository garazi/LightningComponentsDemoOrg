({
    loadOptions : function (component, event, helper) { 
        var options = [ 
        { value: 'ne \'w\'', label: 'Ne \'w\'' }, 
        { value: "in-progress", label: "In Progress" }, 
        { value: "finished", label: "Finished" } 
        ]; 
        component.set("v.options", options); 
    },
    handleChange: function (cmp, event) {
        // This will contain the string of the "value" attribute of the selected option
        var selectedOptionValue = event.getParam("value");
        alert("Option selected with value: '" + selectedOptionValue + "'");
    }
})