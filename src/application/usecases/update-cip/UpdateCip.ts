import { createHmac } from "crypto";
import { CipRepository } from "../../../domain/repositories/CipRepository";
import { UpdateCipDTO } from "./UpdateCipDTO";

export class UpdateCip {
    cipRepository: CipRepository;
    constructor(cipRepository: CipRepository) {
        this.cipRepository = cipRepository;
    }

    async execute(body: UpdateCipDTO,signature:string): Promise<any> {
        if(!this.checkSignature(signature,body)){
            throw new Error('Signature not valid');
        }
        try {
            const resultCip=await this.cipRepository.findByCip(body.data.cip);
            await this.cipRepository.update({...resultCip,status:'APPROVED'},body);
            return {
                status: "success",
            }
        } catch (error) {
            throw Error(error.message);
        }
    }
    private checkSignature(signature:string,body:UpdateCipDTO):boolean{
        const secretKey = String(process.env.PAGO_EFECTIVO_SECRET_KEY);
        const hashString = createHmac('sha256', secretKey+body).digest('hex');
        console.log(hashString);
        return hashString===signature;
    }
}