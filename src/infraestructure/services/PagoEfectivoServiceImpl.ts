import axios from "axios";
import { createHmac } from "crypto";
import { CipGenerateResponseDTO } from "../../application/usecases/create-cip/CipGenerateResponseDTO";
import { GenerateCipRequestDTO } from "../../application/usecases/create-cip/GenerateCipRequestDTO";
import { PagoEfectivoAuthResponseDTO } from "../../application/usecases/get-autorization-token/PagoEfectivoAuthResponseDTO";
import { PagoEfectivoService } from "../../domain/services/PagoEfectivoService";

export class PagoEfectivoServiceImpl implements PagoEfectivoService {
    baseUrl: string;
    constructor() {
        this.baseUrl = String(process.env.PAGO_EFECTIVO_URL);
    }
    async generateCip(body: GenerateCipRequestDTO, headers: any): Promise<CipGenerateResponseDTO> {
        try {
            const { data } = await axios.post(this.baseUrl + 'cpis', body, headers);
            return data.data;
        } catch (error) {
            throw Error(error.message);
        }
    }
    async requestAutorizacion(): Promise<PagoEfectivoAuthResponseDTO> {
        try {
            const accessKey = String(process.env.PAGO_EFECTIVO_ACCESS_KEY);
            const idService = String(process.env.PAGO_EFECTIVO_ID_SERVICE);
            const secretKey = String(process.env.PAGO_EFECTIVO_SECRET_KEY);
            const dateRequest = new Date().toISOString();
            const hashString = createHmac('sha256', accessKey + idService +secretKey+ dateRequest).digest('hex');
            const credentials = {
                accessKey: accessKey,
                idService: idService,
                dateRequest: dateRequest,
                hashString: hashString
            }
            const { data } = await axios.post(this.baseUrl + 'autorizations', credentials);
            return data.data;
        } catch (error) {
            throw Error(error.message);
        }
    }
}