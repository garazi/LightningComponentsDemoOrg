public class gContacts {
    @AuraEnabled
    public static List<Contact> getContacts (Id AccountId) {
        return	[SELECT Name,Title,Phone,Email,MailingAddress,ReportsToId FROM Contact WHERE AccountId=:AccountId];	 
    }
}