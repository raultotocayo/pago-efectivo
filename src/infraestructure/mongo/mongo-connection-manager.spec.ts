import * as mongo_connection_manager from "./mongo-connection-manager"
// @ponicode
describe("getDb", () => {
    let inst: any

    beforeEach(() => {
        inst = new mongo_connection_manager.MongoConnectionManager('','')
    })

    test("0", async () => {
        expect.assertions(1)
        try {
            await inst.getDb()
        } catch (e) {
            expect(e).toBe(e)
        }
    })
})
