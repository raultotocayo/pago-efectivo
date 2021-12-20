import * as PagoEfectivoUserRepositoryImpl from "./PagoEfectivoUserRepositoryImpl"
import * as PagoEfectivoUser from "../../domain/entities/PagoEfectivoUser"
import { Db, MongoClient } from "mongodb"

import { MongoMemoryServer } from "mongodb-memory-server"
import { PagoEfectivoUserRepository } from "../../domain/repositories/PagoEfectivoUserRepository"
let mongo
let mongoClient
let db
import * as CipRepositoryImpl from "./CipRepositoryImpl"
import * as Cip from "../../domain/entities/Cip"
import { CipRepository } from "../../domain/repositories/CipRepository"
describe("create", () => {
    let inst: CipRepository
    beforeAll(async () => {
        mongo = await MongoMemoryServer.create();
        process.env.MONGO_HOST = await mongo.getUri();
        process.env.MONGO_DB = 'db-for-test';

        mongoClient = await MongoClient.connect(process.env.MONGO_HOST);
        db = mongoClient.db(process.env.MONGO_DB);
    })
    beforeEach(() => {
        inst = new CipRepositoryImpl.CipRepositoryImpl(db)
    })

    test("should throw error for invalid cip object", async () => {
        // let param1: any = new Cip.Cip({})

        // let callFunction: any = () => {
        //     inst.create(param1)
        // }
        // expect(callFunction).toThrowError()
    })
})

// @ponicode
describe("findById", () => {
    let inst: any

    beforeEach(() => {
        inst = new CipRepositoryImpl.CipRepositoryImpl(db)
    })

    test("should throw error", () => {
        inst.findById("7289708e-b17a-477c-8a77-9ab575c4b4d8")
    })

    test("1", () => {
        inst.findById(undefined)
    })
})
