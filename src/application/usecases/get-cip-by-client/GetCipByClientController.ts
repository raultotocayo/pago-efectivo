import { FastifyReply, FastifyRequest } from "fastify";
import { GetCipByClient } from "./GetCipByClient";

export class GetCipByClientController {
    getCipByClient: GetCipByClient;
    constructor(getCipByClient: GetCipByClient) {
        this.getCipByClient = getCipByClient;
    }
    async execute(req:FastifyRequest,res:FastifyReply): Promise<any> {
        try {
            const result = await this.getCipByClient.execute(req.params['clientId']);
            res.status(200).send({code:200,msg:'ok',data:result});
        } catch (error) {
            res.code(500)
            res.send({ code: 500, msg: error.message });            
        }
    }
}