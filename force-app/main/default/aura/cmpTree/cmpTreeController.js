({
    init: function (cmp) {
        var items = [{
            "label": "User",
            "name": "1",
            "disabled": false,
            "expanded": true,
            "items": [{
                "label": "Standard User",
                "name": "2",
                "disabled": false,
                "expanded": true,
                "items": []
            }, {
                "label": "Chatter User",
                "name": "3",
                "disabled": false,
                "expanded": true,
                "items": []
            }]
        }, {
            "label": "Administrator",
            "name": "4",
            "disabled": false,
            "expanded": true,
            "items": [{
                "label": "System Administrator",
                "name": "5",
                "disabled": false,
                "expanded": true,
                "items": []
            }, {
                "label": "Chatter Administrator",
                "name": "6",
                "disabled": false,
                "expanded": true,
                "items": []
            }]
        }, {
            "label": "Community User",
            "name": "7",
            "disabled": false,
            "expanded": true,
            "items": [{
                "label": "Community Login User",
                "name": "8",
                "disabled": false,
                "expanded": true,
                "items": []
            }, {
                "label": "Community Plus Login User",
                "name": "9",
                "disabled": false,
                "expanded": true,
                "items": []
            }]
        }];

        cmp.set('v.items', items);
    },
    handleSelect: function (cmp, event) {
        event.preventDefault();
        var mapping = { '1' : 'User', '2' : 'Standard User', '3' : 'Chatter User',
            '4' : 'Administrator', '5' : 'System Administrator', '6' : 'Chatter Administrator',
            '7' : 'Community User', '8' : 'Community Login User', '9' : 'Community Plus Login User'};
        cmp.set('v.selected', mapping[event.getParam('name')]);
    }

}) 