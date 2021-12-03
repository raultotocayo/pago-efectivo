import { Db } from "mongodb";
import { CreateOrUpdateUser } from "../application/usecases/create-user/CreateOrUpdateUser";
import { PagoEfectivoUserRepositoryImpl } from "../infraestructure/repositories/PagoEfectivoUserRepositoryImpl";
import { PagoEfectivoServiceImpl } from "../infraestructure/services/PagoEfectivoServiceImpl";
import Bottle from "bottlejs";
import { GetAutorizationToken } from "../application/usecases/get-autorization-token/GetAutorizationToken";
import { CreateCipController } from "../application/usecases/create-cip/CreateCipController";
import { CreateCip } from "../application/usecases/create-cip/CreateCip";
import { CipRepositoryImpl } from "../infraestructure/repositories/CipRepositoryImpl";
import { UpdateCipController } from "../application/usecases/update-cip/UpdateCipController";
import { UpdateCip } from "../application/usecases/update-cip/UpdateCip";
import { GetCipByClient } from "../application/usecases/get-cip-by-client/GetCipByClient";
import { GetCipByClientController } from "../application/usecases/get-cip-by-client/GetCipByClientController";

export interface dependency {
    database: Db
}
const bottle = new Bottle();
export const createContainer = (instance: dependency) => {
    bottle.factory('db', ()=>instance.database);
    // Repositories
    bottle.service('PagoEfectivoUserRepository', PagoEfectivoUserRepositoryImpl,'db');  
    bottle.service('CipRepository', CipRepositoryImpl,'db');  
    
    // services
    bottle.service('PagoEfectivoService', PagoEfectivoServiceImpl);  
    
    //usecases
    bottle.service('CreateOrUpdateUser', CreateOrUpdateUser,'PagoEfectivoService','PagoEfectivoUserRepository');  
    bottle.service('GetAutorizationToken', GetAutorizationToken,'PagoEfectivoUserRepository','CreateOrUpdateUser');  
    bottle.service('CreateCip', CreateCip,'PagoEfectivoService','GetAutorizationToken','CipRepository');  
    bottle.service('UpdateCip', UpdateCip,'CipRepository');  
    bottle.service('GetCipByClient', GetCipByClient,'CipRepository');  
    
    //Controllers
    bottle.service('CreateCipController', CreateCipController,'CreateCip');  
    bottle.service('UpdateCipController', UpdateCipController,'UpdateCip');  
    bottle.service('GetCipByClientController', GetCipByClientController,'GetCipByClient');  

};
export default bottle.container;