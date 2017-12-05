({
    onChange: function (cmp, evt, helper) {
        cmp.set("v.selected", cmp.find('select').get('v.value'))
    }
})