import * as UserCodeCountry from "./UserCodeCountry"

// @ponicode
describe("UserCodeCountry.UserCodeCountry.create", () => {
    test("0", () => {
        let result: any = UserCodeCountry.UserCodeCountry.create("+51")
        expect(result).toMatchObject({ value: "+51" })
    })

    test("1", () => {
        let result: any = UserCodeCountry.UserCodeCountry.create("+1")
        expect(result).toMatchObject({ value: "+1" })
    })

    test("2", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("FR")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("3", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("China")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("4", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("GB")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("5", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("US")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("6", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("France")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("7", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("United States")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })
})
