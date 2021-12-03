export interface GenerateCipRequestDTO {
    currency:string,
    amount:number,
    transactionCode:string,
    adminEmail:string,
    dateExpiry:string,
    paymentConcept:string,
    additionalData:string,
    userEmail:string,
    userName:string,
    userLastName:string,
    userUbigeo:string,
    userCountry:string,
    userDocumentType:string,
    userDocumentNumber:string,
    userCodeCountry:string,
    userPhone:string
}