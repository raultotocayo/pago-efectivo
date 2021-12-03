import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCip } from "./UpdateCip";

export class UpdateCipController {
    updateCip: UpdateCip;
    constructor(updateCip: UpdateCip) {
        this.updateCip = updateCip;
    }
    async execute(req:FastifyRequest,res:FastifyReply): Promise<any> {
        try {
            const result = await this.updateCip.execute(req.body as any,req.headers['pe-signature'] as any);
            res.status(200).send({code:200,msg:'ok',data:result});
        } catch (error) {
            res.code(500)
            res.send({ code: 500, msg: error.message });            
        }
    }
}