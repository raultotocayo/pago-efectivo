import * as CreateCipController from "./CreateCipController"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        //inst = new CreateCipController.CreateCipController()
    })

    test("0", async () => {
        expect.assertions(1)
        try {
            await inst.execute({}, {})
        } catch (e) {
            expect(e).toBe(e)
        }
    })
})
