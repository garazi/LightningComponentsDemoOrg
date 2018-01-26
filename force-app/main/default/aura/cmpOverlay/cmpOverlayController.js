({    
    handleShowModal: function(component, evt, helper) {
        var modalBody;
        $A.createComponent("c:cmpModalContent", {},
                           function(content, status) {
                               if (status === "SUCCESS") {
                                   modalBody = content;
                                   component.find('overlayLib').showCustomModal({
                                       header: "Application Confirmation",
                                       body: modalBody, 
                                       showCloseButton: true,
                                       cssClass: "mymodal",
                                       closeCallback: function() {
                                           alert('You closed the alert!');
                                       }
                                   })
                                   
                               }
                               
                           });
    }
})