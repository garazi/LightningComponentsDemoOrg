<aura:application extends="force:slds" implements="force:hasRecordId">
    <!-- Replace the record ID with your own -->
    <lightning:card title='Test Component' class='slds-card_boundary'>
		<lightning:select name="select1" required="true">
        <option value="">choose one...</option>
        <option value="1">one</option>
        <option value="2">two</option>
        <option value="3">three</option>
    </lightning:select>
	</lightning:card>
</aura:application>