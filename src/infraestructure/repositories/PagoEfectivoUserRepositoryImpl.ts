import { DateTime } from "luxon";
import { Collection, Db } from "mongodb";
import { PagoEfectivoUser } from "../../domain/entities/PagoEfectivoUser";
import { PagoEfectivoUserRepository } from "../../domain/repositories/PagoEfectivoUserRepository";
const COLLECTION_NAME = 'core-cash-payment-user'
const KEY = 'pagoefectivo-user'
export class PagoEfectivoUserRepositoryImpl implements PagoEfectivoUserRepository {
    private readonly _model: Collection;
    constructor(db: Db) {
        this._model = db.collection(COLLECTION_NAME);
    }
    async createOrUpdate(user: PagoEfectivoUser): Promise<PagoEfectivoUser> {
        const { key, createdAt } = user
        const now = DateTime.local()
        const updateJson = { ...user, updateAt: now }
        const createJson = { key: KEY, createdAt: now }
        const result = await this._model.findOneAndUpdate(
            { key: KEY },
            {
                $set: updateJson,
                $setOnInsert: createJson
            },
            { upsert: true, returnDocument: 'after' }
        );
        return result.value as PagoEfectivoUser;
    }
    getOne(): Promise<PagoEfectivoUser> {
        return this._model.findOne({ key: KEY }).then((user) => {
            return user as unknown as PagoEfectivoUser;
        });
    }

}