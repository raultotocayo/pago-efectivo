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
    public static create(mobileCountryCode: string): UserCodeCountry {
        if (!this.isValidCodeCountry(mobileCountryCode)) {
            throw new Error('Invalid user mobileCountryCode ');
        }
        return new UserCodeCountry(mobileCountryCode);
    }
}