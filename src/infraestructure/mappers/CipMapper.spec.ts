import * as CipMapper from "./CipMapper"
import * as Cip from "../../domain/entities/Cip"
// @ponicode
describe("CipMapper.CipMapper.toJson", () => {
    test("0", () => {
        let param1: any = new Cip.Cip(56784)
        let callFunction: any = () => {
            CipMapper.CipMapper.toJson(param1)
        }
    
        expect(callFunction).toThrow()
    })

    test("1", () => {
        let param1: any = new Cip.Cip(12345)
        let callFunction: any = () => {
            CipMapper.CipMapper.toJson(param1)
        }
    
        expect(callFunction).toThrow()
    })

    test("2", () => {
        let param1: any = new Cip.Cip("bc23a9d531064583ace8f67dad60f6bb")
        let callFunction: any = () => {
            CipMapper.CipMapper.toJson(param1)
        }
    
        expect(callFunction).toThrow()
    })

    test("3", () => {
        let param1: any = new Cip.Cip("a1969970175")
        let callFunction: any = () => {
            CipMapper.CipMapper.toJson(param1)
        }
    
        expect(callFunction).toThrow()
    })

    test("4", () => {
        let param1: any = new Cip.Cip(Infinity)
        let callFunction: any = () => {
            CipMapper.CipMapper.toJson(param1)
        }
    
        expect(callFunction).toThrow()
    })

    test("5", () => {
        let param1: any = new Cip.Cip(-Infinity)
        let callFunction: any = () => {
            CipMapper.CipMapper.toJson(param1)
        }
    
        expect(callFunction).toThrow()
    })
})
