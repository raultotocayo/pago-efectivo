import  assert  from "assert";

export class Amount {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
    public static create(amount: number): Amount {
        assert(amount!==undefined && amount!==null && !isNaN(amount), `Invalid amount ${amount}`);  
        if(amount<=0 || amount>1000000000) {
            throw new Error(`Invalid amount ${amount}`);
        }
        return new Amount(amount);
    }
}