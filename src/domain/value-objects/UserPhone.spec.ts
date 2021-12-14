import * as UserPhone from "./UserPhone"
// @ponicode
describe("UserPhone.UserPhone.create", () => {
    test("0", () => {
        let callFunction: any = () => {
            UserPhone.UserPhone.create("")
        }
    
        expect(callFunction).toThrow('Invalid phone number')
    })

    test("1", () => {
        let result: any = UserPhone.UserPhone.create("807-870-7660")
        expect(result).toMatchObject({ value: "807-870-7660" })
    })

    test("2", () => {
        let result: any = UserPhone.UserPhone.create("581-660-3163")
        expect(result).toMatchObject({ value: "581-660-3163" })
    })

    test("3", () => {
        let result: any = UserPhone.UserPhone.create("850-826-8625")
        expect(result).toMatchObject({ value: "850-826-8625" })
    })

    test("4", () => {
        let result: any = UserPhone.UserPhone.create("813-639-1831")
        expect(result).toMatchObject({ value: "813-639-1831" })
    })

    test("5", () => {
        let result: any = UserPhone.UserPhone.create("354-802-3065")
        expect(result).toMatchObject({ value: "354-802-3065" })
    })
})
