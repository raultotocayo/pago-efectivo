import * as UserEmail from "./UserEmail"
// @ponicode
describe("UserEmail.UserEmail.create", () => {
    test("0", () => {
        let result: any = UserEmail.UserEmail.create("email@Google.com")
        expect(result).toMatchObject({ value: "email@Google.com" })
    })

    test("1", () => {
        let result: any = UserEmail.UserEmail.create("TestUpperCase@Example.com")
        expect(result).toMatchObject({ value: "TestUpperCase@Example.com" })
    })

    test("2", () => {
        let callFunction: any = () => {
            UserEmail.UserEmail.create("user@host:300")
        }
    
        expect(callFunction).toThrow('Invalid email')
    })

    test("3", () => {
        let callFunction: any = () => {
            UserEmail.UserEmail.create("ponicode.com")
        }
    
        expect(callFunction).toThrow('Invalid email')
    })

    test("4", () => {
        let callFunction: any = () => {
            UserEmail.UserEmail.create("")
        }
    
        expect(callFunction).toThrow('Invalid email')
    })

    test("5", () => {
        let result: any = UserEmail.UserEmail.create("something@example.com")
        expect(result).toMatchObject({ value: "something@example.com" })
    })

    test("6", () => {
        let result: any = UserEmail.UserEmail.create("user1+user2@mycompany.com")
        expect(result).toMatchObject({ value: "user1+user2@mycompany.com" })
    })

    test("7", () => {
        let callFunction: any = () => {
            UserEmail.UserEmail.create("something.example.com")
        }
    
        expect(callFunction).toThrow('Invalid email')
    })

    test("8", () => {
        let result: any = UserEmail.UserEmail.create("bed-free@tutanota.de")
        expect(result).toMatchObject({ value: "bed-free@tutanota.de" })
    })
})
