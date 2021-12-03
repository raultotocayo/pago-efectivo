import { Cip } from "../../../domain/entities/Cip";
import { CipRepository } from "../../../domain/repositories/CipRepository";
import { PagoEfectivoService } from "../../../domain/services/PagoEfectivoService";
import { UserCodeCountry } from "../../../domain/value-objects/UserCodeCountry";
import { UserEmail } from "../../../domain/value-objects/UserEmail";
import { UserPhone } from "../../../domain/value-objects/UserPhone";
import { GetAutorizationToken } from "../get-autorization-token/GetAutorizationToken";
import { CipGenerateResponseDTO } from "./CipGenerateResponseDTO";
import { GenerateCipRequestDTO } from "./GenerateCipRequestDTO";

export class CreateCip {
    pagoEfectivoService: PagoEfectivoService;
    getAutorizationToken:GetAutorizationToken;
    cipRepostiory: CipRepository;
    constructor(pagoEfectivoService: PagoEfectivoService,getAutorizationToken:GetAutorizationToken,cipRepostiory: CipRepository) {
        this.pagoEfectivoService = pagoEfectivoService;
        this.getAutorizationToken=getAutorizationToken;
        this.cipRepostiory=cipRepostiory;
    }
    async execute(request: GenerateCipRequestDTO): Promise<CipGenerateResponseDTO> {
        try {
            const adminEmailOrError=UserEmail.create(request.adminEmail);
            const userEmailOrError= UserEmail.create(request.userEmail);
            const userCodeCountryOrError= UserCodeCountry.create(request.userCodeCountry);
            const userPhoneOrError=UserPhone.create(request.userPhone);
            const cipResult=await this.generateCip(request);
            const newCip=new Cip({
                cip:String(cipResult.cip),
                ...request,
                adminEmail:adminEmailOrError,
                userEmail:userEmailOrError,
                userCodeCountry:userCodeCountryOrError,
                userPhone:userPhoneOrError,
            })
            await this.cipRepostiory.create(newCip);
            return cipResult
        } catch (error) {
            throw Error(error.message);
        }
    }
    private async generateCip(body:GenerateCipRequestDTO):Promise<CipGenerateResponseDTO>{
        const headers=await this.getAutorizationToken.getAutenticationHeader()
        const response=await this.pagoEfectivoService.generateCip(body,headers)
        return response;

    }

}