import assert from "assert";

export class UserCodeCountry {
    value: string;
    constructor(value: string) {
        assert(value!==undefined || value!==null, 'User code country is required');  
        this.value = value;
    }
    private static isValidCodeCountry(code: string) {
        let re = /^\+\d+$/;
        return re.test(code);
    }
    public static create(code: string): UserCodeCountry {
        if (!this.isValidCodeCountry(code)) {
            throw new Error('Invalid user code country');
        }
        return new UserCodeCountry(code);
    }
}