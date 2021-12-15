import * as PagoEfectivoUserRepositoryImpl from "./PagoEfectivoUserRepositoryImpl"
import * as PagoEfectivoUser from "../../domain/entities/PagoEfectivoUser"
import {  Db, MongoClient } from "mongodb"

import { MongoMemoryServer } from "mongodb-memory-server"
import { PagoEfectivoUserRepository } from "../../domain/repositories/PagoEfectivoUserRepository"
let mongo
let mongoClient
let db:Db
describe("createOrUpdate", () => {
    let inst: PagoEfectivoUserRepository
    const user = new PagoEfectivoUser.PagoEfectivoUser(
        {
            codeService: 'SRV',
            token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJCSzIiLCJqdGkiOiJiYWRkZjdjNC1hMjllLTRmNDYtYTgzMy0wMDZjOWI2MjA4MTMiLCJuYW1laWQiOiIxMDI4IiwiZXhwIjoxNTc1OTg5NTYzfQ.r7USRyoIoCrgJOsLvC41fN-aIcBQ2uHhNhsPBvFW-IQ',
            tokenStart: '2019-12-09T16:15:19-05:00',
            tokenExpires: '2021-12-03T08:48:19-05:00'
        }
    )

    beforeAll(async () => {
        mongo = await MongoMemoryServer.create();
        process.env.MONGO_HOST = await mongo.getUri();
        process.env.MONGO_DB = 'db-for-test';

        mongoClient = await MongoClient.connect(process.env.MONGO_HOST);
        db = mongoClient.db(process.env.MONGO_DB);
    })
    beforeEach(async () => {
        inst = new PagoEfectivoUserRepositoryImpl.PagoEfectivoUserRepositoryImpl(db)
    })
    afterAll(async () => {
        await mongoClient.close();
        await mongo.stop();
    });
    test("result of createOrUpdate and getOne should be equal", async () => {
        const result = await inst.createOrUpdate(user)
        const result2 = await inst.getOne()
        expect(result).toEqual(result2)
    })
})
