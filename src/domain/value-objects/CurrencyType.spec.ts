import * as CurrencyType from "./CurrencyType"
// @ponicode
describe("CurrencyType.CurrencyType.create", () => {
    test("0", () => {
        let result: any = CurrencyType.CurrencyType.create("PEN")
        expect(result).toMatchObject({ value: "PEN" })
    })

    test("1", () => {
        let result: any = CurrencyType.CurrencyType.create("USD")
        expect(result).toMatchObject({ value: "USD" })
    })

    test("2", () => {
        let value:any='PENN'
        let callFunction: any = () => {
            CurrencyType.CurrencyType.create(value)
        }
    
        expect(callFunction).toThrow('Value \'"PENN"\' is not assignable to type \'"PEN" | "USD"\'.')
    })
    test("2", () => {
        let value:any='EUR'
        let callFunction: any = () => {
            CurrencyType.CurrencyType.create(value)
        }
    
        expect(callFunction).toThrow('Value \'"EUR"\' is not assignable to type \'"PEN" | "USD"\'.')
    })
})
