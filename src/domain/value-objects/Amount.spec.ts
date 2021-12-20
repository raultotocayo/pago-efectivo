import * as Amount from "./Amount"
// @ponicode
describe("Amount.Amount.create", () => {
    test("should have value", () => {
        let result: any = Amount.Amount.create(1.0)
        expect(result).toMatchObject({ value: 1 })
    })

    test("should throw error", () => {
        let callFunction: any = () => {
            Amount.Amount.create(0)
        }
    
        expect(callFunction).toThrow('Invalid amount 0')
    })

    test("should throw error", () => {
        let callFunction: any = () => {
            Amount.Amount.create(-1)
        }
    
        expect(callFunction).toThrow('Invalid amount -1')
    })

    test("should throw error", () => {
        let callFunction: any = () => {
            Amount.Amount.create(-Infinity)
        }
    
        expect(callFunction).toThrow('Invalid amount -Infinity')
    })

    test("should throw error", () => {
        let callFunction: any = () => {
            Amount.Amount.create(Infinity)
        }
    
        expect(callFunction).toThrow('Invalid amount Infinity')
    })

    test("should throw error", () => {
        let callFunction: any = () => {
            Amount.Amount.create(NaN)
        }
    
        expect(callFunction).toThrow('Invalid amount NaN')
    })

    test("should have value", () => {
        let result: any = Amount.Amount.create(500000.0)
        expect(result).toMatchObject({ value: 500000 })
    })

    test("should have value", () => {
        let result: any = Amount.Amount.create(10000.12)
        expect(result).toMatchObject({ value: 10000.12 })
    })

    test("should have value", () => {
        let result: any = Amount.Amount.create(5.5)
        expect(result).toMatchObject({ value: 5.5 })
    })
})
