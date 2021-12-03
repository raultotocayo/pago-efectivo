import fastify from "fastify"
import { MongoConnectionManager } from "./infraestructure/mongo/mongo-connection-manager"
import { httpServer } from "./interfaces/rest/server"
const c=require('./bootstrap/config')
import { Settings } from "luxon";
import { createContainer } from "./bootstrap/iocContainer";

async function run() {
    Settings.defaultZone = "America/lima";
    const db = await (new MongoConnectionManager(c.db.url, c.db.name)).getDb()
    const server=fastify({logger:true})
    createContainer({database:db})
    httpServer(server)
}
run()