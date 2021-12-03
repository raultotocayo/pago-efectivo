import { assert } from "console";

export class UserPhone {
    value: string;
    constructor(value: string) {
        assert(value!==undefined || value!==null, 'UserPhone is required');  
        this.value = value;
    }
    public static create(phoneNumer: string): UserPhone {
        if(phoneNumer.length<9){
            throw new Error('Invalid phone number');
        }
        return new UserPhone(phoneNumer);
    }
}