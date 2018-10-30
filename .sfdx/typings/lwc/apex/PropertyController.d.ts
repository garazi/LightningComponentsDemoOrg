declare module "@salesforce/apex/PropertyController.findAll" {
  export default function findAll(param: {searchKey: any, minPrice: any, maxPrice: any, pageSize: any, pageNumber: any}): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.findById" {
  export default function findById(param: {propertyId: any}): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getAvailableProperties" {
  export default function getAvailableProperties(): Promise<any>;
}
declare module "@salesforce/apex/PropertyController.getSimilarProperties" {
  export default function getSimilarProperties(param: {propertyId: any, bedrooms: any, price: any, searchCriteria: any}): Promise<any>;
}
