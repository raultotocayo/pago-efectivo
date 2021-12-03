export class Payment {
    cip:string
    currency:string
    amount:number
    paymentDate:string
    transactionCode:string
    constructor(props) {
        this.cip=props.cip
        this.currency=props.currency
        this.amount=props.amount
        this.paymentDate=props.paymentDate
        this.transactionCode=props.transactionCode 
    }
}