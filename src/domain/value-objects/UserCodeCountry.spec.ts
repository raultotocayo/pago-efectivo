import * as UserCodeCountry from "./UserCodeCountry"

// @ponicode
describe("UserCodeCountry.UserCodeCountry.create", () => {
    test("should have value +51", () => {
        let result: any = UserCodeCountry.UserCodeCountry.create("+51")
        expect(result).toMatchObject({ value: "+51" })
    })

    test("should have value +51", () => {
        let result: any = UserCodeCountry.UserCodeCountry.create("+1")
        expect(result).toMatchObject({ value: "+1" })
    })

    test("should throw error with FR Value", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("FR")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("should throw error with China value", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("China")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("should throw error with GB value", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("GB")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("should throw error with US value", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("US")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("should throw error with France value", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("France")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })

    test("should throw error with United Stated value", () => {
        let callFunction: any = () => {
            UserCodeCountry.UserCodeCountry.create("United States")
        }
    
        expect(callFunction).toThrow('Invalid user mobileCountryCode ')
    })
})
