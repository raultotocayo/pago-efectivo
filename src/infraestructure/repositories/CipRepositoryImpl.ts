import { DateTime } from "luxon";
import { Collection, Db } from "mongodb";
import { CipByClientReponseDto } from "../../application/usecases/get-cip-by-client/CipByClientReponseDTO";
import { UpdateCipDTO } from "../../application/usecases/update-cip/UpdateCipDTO";
import { Cip } from "../../domain/entities/Cip";
import { CipRepository } from "../../domain/repositories/CipRepository";
import { CipMapper } from "../mappers/CipMapper";
const COLLECTION_NAME = 'core-cash-payment-cip';

export class CipRepositoryImpl implements CipRepository {
    private readonly _model: Collection;

    constructor(db: Db) {
        this._model = db.collection(COLLECTION_NAME);
    }
    update(currentCip: Cip, updateCip: UpdateCipDTO): Promise<any> {
        const { cip, createdAt } = currentCip
        const now = DateTime.local()
        const updateJson = { ...CipMapper.toJson(currentCip),payment:{ ...updateCip.data,createdAt: now}, updatedAt: now.toISO() }
        return this._model.updateOne(
            { cip: cip },
            { 
                $set: updateJson,
                $push: { history: { ...updateCip.data, createdAt: now }  }, 
            },
            {upsert:true}
        )
    }
    findByClientId(clientId: string): Promise<CipByClientReponseDto[]> {
        return this._model.find({ clientId: clientId }).toArray().then(cips => {
            return cips.map(cpi => CipMapper.toDto(cpi));
        })
    }
    findByCip(cip: string): Promise<Cip> {
        return this._model.findOne({ cip: cip }).then(element => {
            if(!element) throw new Error('No existe en la base de datos')
            return CipMapper.toEntity(element);
        })
    }
    create(cip: Cip): Promise<any> {
        const now = DateTime.local()
        const createJson = { ...CipMapper.toJson(cip), createdAt: now.toISO() }
        return this._model.insertOne(createJson)
    }
    findById(id: string): Promise<Cip> {
        return this._model.findOne({ id: id }).then(cpi => {
            return CipMapper.toEntity(cpi);
        })
    }

}