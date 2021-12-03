import { CipByClientReponseDto } from "../../application/usecases/get-cip-by-client/CipByClientReponseDTO";
import { Cip } from "../entities/Cip";

export interface CipRepository {
    create(cip: Cip): Promise<any>;
    findById(id: string): Promise<Cip>;
    findByCip(cpi:string):Promise<Cip>;
    findByClientId(clientId:string):Promise<CipByClientReponseDto []>;
    update(cip:Cip,updateJson:any): Promise<any>;
}