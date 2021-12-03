import { PagoEfectivoUser } from "../entities/PagoEfectivoUser";

export interface PagoEfectivoUserRepository{
    createOrUpdate(user:PagoEfectivoUser):Promise<PagoEfectivoUser>;
    getOne():Promise<PagoEfectivoUser>
}