import { PagoEfectivoUser } from "../../../domain/entities/PagoEfectivoUser";
import { PagoEfectivoUserRepository } from "../../../domain/repositories/PagoEfectivoUserRepository";
import { PagoEfectivoService } from "../../../domain/services/PagoEfectivoService";

export class CreateOrUpdateUser {
    pagoEfectivoService: PagoEfectivoService;
    pagoEfectivoUserRepository: PagoEfectivoUserRepository;
    constructor(pagoEfectivoService: PagoEfectivoService, pagoEfectivoUserRepository: PagoEfectivoUserRepository) {
        this.pagoEfectivoService = pagoEfectivoService;
        this.pagoEfectivoUserRepository = pagoEfectivoUserRepository;
    }
    async execute():Promise<PagoEfectivoUser> {
        try {
            const result =await this.pagoEfectivoService.requestAutorizacion();
            const user=await this.pagoEfectivoUserRepository.createOrUpdate({
                codeService: result.codeService,
                token: result.token,
                tokenStart: result.tokenStart,
                tokenExpires: result.tokenExpires,
            });
            return user;
        } catch (error) {
            throw Error(error.message);
        }
    }
}