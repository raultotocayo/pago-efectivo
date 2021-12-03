import { FastifyReply, FastifyRequest } from "fastify";
import { CreateCip } from "./CreateCip";

export class CreateCipController {
    createCip: CreateCip;
    constructor(CreateCip: CreateCip) {
        this.createCip = CreateCip;
    }
    async execute(req:FastifyRequest,res:FastifyReply): Promise<any> {
        try {
            const result = await this.createCip.execute(req.body as any);
            res.status(200).send({code:200,msg:'ok',data:result});
        } catch (error) {
            res.code(500)
            res.send({ code: 500, msg: error.message });            
        }
    }
}