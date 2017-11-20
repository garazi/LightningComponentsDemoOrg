public with sharing class UserController {
    @AuraEnabled
    public static User getCurrentUser() {
        return [SELECT Id, FirstName, LastName FROM User WHERE Id = :UserInfo.getUserId() LIMIT 1];
    }
    
    @AuraEnabled
    public static String randomWithLimit(){
        String img;
        Integer rand = Math.round(Math.random()*1000);
        rand = Math.mod(rand, 2);
        if (rand == 0) {
            img = 'tortola';
        } else {
            img = 'alps';
        }
        return img;
    }

}
