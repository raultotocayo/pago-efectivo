import { PagoEfectivoUserRepository } from "../../../domain/repositories/PagoEfectivoUserRepository";
import { DateTime } from "luxon";
import { CreateOrUpdateUser } from "../create-user/CreateOrUpdateUser";

export class GetAutorizationToken {
    pagoEfectivoUserRepository: PagoEfectivoUserRepository
    createOrUpdateUser: CreateOrUpdateUser
    constructor(pagoEfectivoUserRepository: PagoEfectivoUserRepository, createOrUpdateUser: CreateOrUpdateUser) {
        this.pagoEfectivoUserRepository = pagoEfectivoUserRepository;
        this.createOrUpdateUser = createOrUpdateUser;
    }
    async execute(): Promise<string> {
        try {
            const user = await this.pagoEfectivoUserRepository.getOne();
            if (!user) {
                return this.createOrUpdatePagoEfectivoUser();
            }
            if (this.checkTokenExpiration(user.tokenExpires)) {
                return this.createOrUpdatePagoEfectivoUser();
            }
            return user.token;
        }
        catch (err) {
            throw Error(err.message);
        }
    }
    private async createOrUpdatePagoEfectivoUser(): Promise<string> {
        const updatedUser = await this.createOrUpdateUser.execute();
        return updatedUser.token;
    }
    private checkTokenExpiration(tokenExpires: string): boolean {
        const now = DateTime.local();
        const expiresAt = DateTime.fromISO(tokenExpires);
        if (expiresAt.diff(now).as('minutes') > 0) {
            return true;
        }
        return false;
    }
    async getAutenticationHeader() {
        const token = await this.execute()
        const config = {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept-Language':'es-PE',
                'Origin':'web'
            }
        }
        return config
    }
}

