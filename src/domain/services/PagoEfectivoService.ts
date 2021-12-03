import { CipGenerateResponseDTO } from "../../application/usecases/create-cip/CipGenerateResponseDTO";
import { GenerateCipRequestDTO } from "../../application/usecases/create-cip/GenerateCipRequestDTO";
import { PagoEfectivoAuthResponseDTO } from "../../application/usecases/get-autorization-token/PagoEfectivoAuthResponseDTO";

export interface PagoEfectivoService {
    requestAutorizacion(): Promise<PagoEfectivoAuthResponseDTO>;
    generateCip(body:GenerateCipRequestDTO,headers:any):Promise<CipGenerateResponseDTO>;
}