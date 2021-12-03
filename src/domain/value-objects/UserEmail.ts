import { assert } from "console";

export class UserEmail {
    value: string;
    constructor(value: string) {
        assert(value!==undefined || value!==null, 'Email is required');  
        this.value = value;
    }
    private static isValidEmail(email: string) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    public static create(email: string): UserEmail {
        if (!this.isValidEmail(email)) {
            throw new Error('Invalid email');
        }
        return new UserEmail(email);
    }
}