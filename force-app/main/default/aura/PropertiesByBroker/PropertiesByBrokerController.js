({
	doInit: function(component, event, helper) {
		var rowLevelActions = [
			{ label: 'Edit Details', name: 'edit_details' },
			{ label: 'Delete', name: 'delete' }
        ];
		component.set("v.columns", [
			{
				label: "Property",
				fieldName: "url", //there is no url field, we are using it for the purpose of navigation
				type: "url",
				sortable: "true", // we won't actually finish this in the demo
				typeAttributes: { label: { 
					fieldName: "Name" // this is what will be displayed in the column
					} 
				}
			},
			{
				label: "Status",
				fieldName: "Status__c"
			},
			{
				type: 'action',
				typeAttributes: { rowActions: rowLevelActions }
			}
        ]);
		var action = component.get("c.getPropertiesByBroker");
		action.setParams({
			BrokerId: component.get("v.recordId")
		});
		action.setCallback(this, function(response) {
			var propertyList = response.getReturnValue();
			propertyList.forEach(function(element){
                // url is a temporary field that we will use for the purpose of navigation
				element.url = "/one/one.app#/sObject/" + element.Id;
			});
			component.set("v.propertyRecords", propertyList);
		})
		$A.enqueueAction(action);
	},
    handleRowAction: function (cmp, event, helper) {
        cmp.set("v.showDialog", "true");
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'edit_details':
                cmp.set("v.selectedRecord", row.Id);    
                break;
            case 'delete':
                var rows = cmp.get('v.contactRecords');
                var rowIndex = rows.indexOf(row);
                rows.splice(rowIndex, 1);
                cmp.set('v.contactRecords', rows);
                break;
        }
    },
	doSelect: function(component, event, helper) {
		var selectedRows = event.getParam('selectedRows');
		for (var i = 0; i < selectedRows.length; i++) {
			alert("You selected: " + selectedRows[i].Name);
		}
	},
	updateColumnSorting: function(component, event, helper) {
		var fieldName = event.getParam('fieldName');
		var sortDirection = event.getParam('sortDirection');
        
        //alert("This would sort the column in " + sortDirection + " order.")
		// assign the latest attribute with the sorted column fieldName and sorted direction
		component.set("v.sortedBy", fieldName);
		component.set("v.sortedDirection", sortDirection);
		helper.sortData(component, fieldName, sortDirection);
	}
})