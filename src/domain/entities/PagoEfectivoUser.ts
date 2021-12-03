import { v4 as uuid } from 'uuid';
const KEY = 'pagoefectivo-user';
export class PagoEfectivoUser {
    id? : string
    key?:string  
    token: string
    codeService: string
    tokenStart: string
    tokenExpires: string
    createdAt?:Date
    updatedAt?:Date
    constructor(props: any) {
        this.id = props.id??uuid()
        this.token = props.token
        this.codeService = props.codeService
        this.tokenStart = props.tokenStart
        this.tokenExpires = props.tokenExpires
        this.key=KEY
        this.createdAt = props.createdAt
        this.updatedAt = props.updatedAt
    }
}