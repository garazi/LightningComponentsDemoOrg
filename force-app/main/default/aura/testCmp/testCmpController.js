({
    doInit : function(component,event,helper){
        console.log("map: ", component.get('v.property.Address__c'))
        console.log("markers: ", component.get('v.mapMarkers'))
        component.set("v.mapMarkers", [{
            location: {
                Street: component.get('v.property.Address__c'),
                City: component.get('v.property.City__c'),
                State: component.get('v.property.State__c')
            },
            title: component.get('v.property.Name'),
            description: component.get('v.property.Description__c')
        },
        {
            location: {
                Street: 'The Landmark @ One Market',
                City: 'San Francisco',
                PostalCode: '94105',
                State: 'CA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'Worldwide Corporate Headquarters',
            description: 'Sales: 1800-NO-SOFTWARE'
        },
        {
            location: {
                Street: '950 East Paces Ferry Road NE',
                City: 'Atlanta',
                PostalCode: '94105',
                State: 'GA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Atlanta',
        },
        {
            location: {
                Street: '929 108th Ave NE',
                City: 'Bellevue',
                PostalCode: '98004',
                State: 'WA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Bellevue',
        },
        {
            location: {
                Street: '500 Boylston Street 19th Floor',
                City: 'Boston',
                PostalCode: '02116',
                State: 'MA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Boston',
        },
        {
            location: {
                Street: '111 West Illinois Street',
                City: 'Chicago',
                PostalCode: '60654',
                State: 'IL',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Chicago',
        },
        {
            location: {
                Street: '2550 Wasser Terrace',
                City: 'Herndon',
                PostalCode: '20171',
                State: 'VA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Herndon',
        },
        {
            location: {
                Street: '2035 NE Cornelius Pass Road',
                City: 'Hillsboro',
                PostalCode: '97124',
                State: 'OR',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Hillsboro',
        },
        {
            location: {
                Street: '111 Monument Circle',
                City: 'Indianapolis',
                PostalCode: '46204',
                State: 'IN',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Indy',
        },
        {
            location: {
                Street: '300 Spectrum Center Drive',
                City: 'Irvine',
                PostalCode: '92618',
                State: 'CA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Irvine',
        },
        {
            location: {
                Street: '361 Centennial Parkway',
                City: 'Louisville',
                PostalCode: '80027',
                State: 'CO',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Louisville',
        },
        {
            location: {
                Street: '685 Third Ave',
                City: 'New York',
                PostalCode: '10017',
                State: 'NY',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc New York',
        },
        {
            location: {
                Street: '1442 2nd Street',
                City: 'Santa Monica',
                PostalCode: '90401',
                State: 'CA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Santa Monica',
        },
        {
            location: {
                Street: '12825 East Mirabeau Parkway',
                City: 'Spokane',
                PostalCode: '99216',
                State: 'WA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Spokane',
        },
        {
            location: {
                Street: '4301 West Boy Scout Blvd',
                City: 'Tampa',
                PostalCode: '33607',
                State: 'WA',
                Country: 'USA',
            },

            icon: 'utility:salesforce1',
            title: 'salesforce.com inc Tampa',
        }])
        console.log("markers: ", component.get('v.mapMarkers'))

        // var declarativeFields=component.get("v.fieldsToDisplay");
        // if (declarativeFields) {
        //     var inputSplit=declarativeFields.split(",");
        //     for (var i in inputSplit) {
        //         inputSplit[i]=inputSplit[i].trim();
        //     }
        //     component.set("v.myFields", inputSplit);
        // }
    },
    setDemoValue : function(component, event, helper) {
		// console.log('before value: ', component.find('nom').get('v.value'));
		// component.find("nom").set("v.value", "temp");
		// console.log('after value: ', component.find('nom').get('v.value'));
    },
    updateRecord : function (component,event,helper) {
        component.set("v.property.Name", "121 Spear St");
        var foo = component.find("propertyService");
        var bar = component.find("nameField");
        console.log("bar: ", bar.value)
        console.log("f: ", component.get("v.property.Name"))
    },
    showHidePanel : function (component,event,helper) {
        var selectedTab = event.currentTarget;
        var panel = selectedTab.querySelector("div[data-tab]");
        var foo = selectedTab.querySelector("button span").innerText;

        
        component.set("v.selectedTab", foo);
        console.log("yes: ", foo)
        $A.util.toggleClass(panel, "centerStage");
        // var editForm = component.find("editForm");
        // $A.util.toggleClass(editForm, "slds-hide");
        // var viewForm = component.find("viewForm");
		// $A.util.toggleClass(viewForm, "slds-hide");
    },
    happyDance : function(component, event, helper) {
        var evt = $A.get("e.c:recordChange");
        evt.setParams({
            "message" : component.get('v.recordId') });
        evt.fire();
    },
    overrideSave : function(component,event,helper) {
        console.log("override")
        event.preventDefault();
    },
    prefillForm : function(component,event,helper){
        var tmpId = event.getParam("message");
        var form = component.find('recordViewForm');
        form.set('v.recordId', tmpId);
    }
})