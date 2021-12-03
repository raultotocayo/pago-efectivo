import { CipRepository } from "../../../domain/repositories/CipRepository";
import { CipByClientReponseDto } from "./CipByClientReponseDTO";

export class GetCipByClient {
    cipRepository: CipRepository;
    constructor(cipRepository: CipRepository) {
        this.cipRepository = cipRepository;
    }

    async execute(clientId:string): Promise<CipByClientReponseDto[]> {
        try {
            const result=await this.cipRepository.findByClientId(clientId);
            return result;
        } catch (error) {
            throw Error(error.message);
        }
    }
}