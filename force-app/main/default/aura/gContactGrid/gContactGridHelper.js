({
	normalizeContactData : function(data) {
        // function to format a row object
        function getRowObject(row) {
            var gridRow = {
                'Id': row.Id,
                'Name': row.Name,
                'Email': row.Email
            };
            
            if ('ReportsToId' in row) {
                gridRow.ReportsToId = row.ReportsToId;
            }
            
            return gridRow;
        }
        
        
        var nestedData = [];
        var childrenIdsToRemove = [];
        
		// iterator over contacts
        data.forEach( function(row, index) {
            var gridRow = getRowObject(row);
            //
           	nestedData.push(gridRow);
        });
        
        // check for children and move contacts into each other
        nestedData.forEach( function(row, index) {
            var children = nestedData.filter(function(child, childIndex) {
                if (row.Id === child.ReportsToId) {
                    // track child IDs to remove from root level once done
                    childrenIdsToRemove.push(child.Id);
                    
                    return true;
                }
                
                return false;
            });
            
            if (children.length) {
                row._children = children;
            }
        });
        
        // clean up the root level
        childrenIdsToRemove.forEach( function(childId, index) {
            // iterate over data for each ID to remove
            nestedData.forEach( function(nRow, nIndex) {
                // remove the row if ID is in removal list
                if (childId === nRow.Id) {
                    nestedData.splice(nIndex, 1);
                }
            });
        });
        
        return nestedData;
	}
})