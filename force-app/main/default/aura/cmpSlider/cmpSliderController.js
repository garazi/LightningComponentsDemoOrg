({
    handleRangeChange: function (cmp, event) {
        var detail = cmp.set("v.value", event.getParam("value"));
    },
    blurIt: function (cmp, event) {
        var s = cmp.find('cmpSlider').checkValidity();
        console.log('s: ', s)
    }
})