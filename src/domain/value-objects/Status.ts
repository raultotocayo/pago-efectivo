import assert from "assert";
import { StringUnion } from "../../shared/utils/StringUnion";


const typesOfStatus =StringUnion(
    'PENDING','APPROVED','REJECTED','CANCELED'
)
type typesOfStatusType=typeof typesOfStatus.type

export class Status{
    value:string
    constructor(value:string){
        this.value=value
    }
    static create(value:string):Status{
        assert(value!==undefined || value!==null, 'Status cannot be null');
        if(!typesOfStatus.check(value)){
            throw new Error('Invalid currency type')
        }
        return new Status(value)
    }
}