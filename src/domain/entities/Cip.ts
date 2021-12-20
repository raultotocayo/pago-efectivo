import { UserCodeCountry } from "../value-objects/UserCodeCountry"
import { UserEmail } from "../value-objects/UserEmail"
import { UserPhone } from "../value-objects/UserPhone"
import { v4 as uuid } from 'uuid';
import { Payment } from "./Payment";
import { CurrencyType } from "../value-objects/CurrencyType";

type documentType='DNI'|'PAR'|'PAS'|'LMI'|'NAN'
type StatusType='PENDING'|'APPROVED'|'REJECTED'|'CANCELED'
export class Cip {
    cip:string
    id:string
    clientId:string
    // document type
    // 
    currency:CurrencyType
    amount:number
    transmisionCode:string
    dateExpiry:Date
    paymentConcept:string
    additionalData:string
    adminEmail:UserEmail
    userEmail:UserEmail
    userName:string
    userLastName:string
    userUbigeo:string
    userCountry:string
    userDocumentType:documentType
    userDocumentNumber:string
    userPhone:UserPhone
    userCodeCountry:UserCodeCountry
    createdAt?:Date
    updatedAt?:Date
    history?:Object[]   
    payment?:Payment
    status: StatusType
    constructor(props:Cip) {
        this.id = props.id??uuid()
        this.cip=props.cip
        this.currency=props.currency
        this.amount=props.amount
        this.transmisionCode=props.transmisionCode
        this.dateExpiry=props.dateExpiry
        this.paymentConcept=props.paymentConcept
        this.additionalData=props.additionalData
        this.adminEmail=props.adminEmail
        this.userEmail=props.userEmail
        this.userName=props.userName
        this.userLastName=props.userLastName
        this.userUbigeo=props.userUbigeo
        this.userCountry=props.userCountry
        this.userDocumentType=props.userDocumentType
        this.userDocumentNumber=props.userDocumentNumber
        this.userPhone=props.userPhone
        this.userCodeCountry=props.userCodeCountry 
        this.createdAt=props.createdAt
        this.updatedAt=props.updatedAt
        this.history=props.history
        this.clientId=props.clientId
        this.payment=props.payment
        this.status=props.status??'PENDING' 
    }
}