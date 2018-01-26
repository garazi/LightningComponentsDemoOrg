<aura:application extends="force:slds" implements="force:hasRecordId">
    <!-- Replace the record ID with your own -->
    <lightning:recordViewForm recordId="0035600000BN1BLAA1" objectApiName="Contact">
        <div class="slds-box slds-theme_default">
            <lightning:outputField fieldName="Name" />
            <lightning:outputField fieldName="Phone"/>
            <lightning:outputField fieldName="Email" />
            <lightning:outputField fieldName="Birthdate" />
            <lightning:outputField fieldName="LeadSource" />
        </div>
    </lightning:recordViewForm>
</aura:application>