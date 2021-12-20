import assert from "assert";
import { StringUnion } from "../../shared/utils/StringUnion";


const typesOfCurrency =StringUnion(
    'PEN','USD'
)
type typesOfCurrencyType=typeof typesOfCurrency.type

export class CurrencyType{
    value:string
    constructor(value:string){
        this.value=value
    }
    static create(value:typesOfCurrencyType):CurrencyType{
        assert(value!==undefined && value!==null, `Invalid currency type ${value}` );
        if(!typesOfCurrency.check(value)){
            throw new Error(`Invalid currency type ${value}` );
        }
        return new CurrencyType(value)
    }
}