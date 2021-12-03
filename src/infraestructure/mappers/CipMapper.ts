import { Cip } from "../../domain/entities/Cip";
import { UserCodeCountry } from "../../domain/value-objects/UserCodeCountry";
import { UserEmail } from "../../domain/value-objects/UserEmail";
import { UserPhone } from "../../domain/value-objects/UserPhone";

export class CipMapper {
    static toJson(cip: Cip): any {
        return {
            cip: cip.cip,
            id: cip.id,
            currency: cip.currency,
            amount: cip.amount,
            transmisionCode: cip.transmisionCode,
            dateExpiry: cip.dateExpiry,
            paymentConcept: cip.paymentConcept,
            additionalData: cip.additionalData,
            adminEmail: cip.adminEmail.value,
            userEmail: cip.userEmail.value,
            userName: cip.userName,
            userLastName: cip.userLastName,
            userUbigeo: cip.userUbigeo,
            userCountry: cip.userCountry,
            userDocumentType: cip.userDocumentType,
            userDocumentNumber: cip.userDocumentNumber,
            userPhone: cip.userPhone.value,
            userCodeCountry: cip.userCodeCountry.value,
            clientId: cip.clientId,
            status: cip.status,
        };
    }
    static toEntity(json: any): Cip {
        return {
            cip: json.cip,
            id: json.id,
            currency: json.currency,
            amount: json.amount,
            transmisionCode: json.transmisionCode,
            dateExpiry: json.dateExpiry,
            paymentConcept: json.paymentConcept,
            additionalData: json.additionalData,
            adminEmail: UserEmail.create(json.adminEmail),
            userEmail: UserEmail.create(json.userEmail),
            userName: json.userName,
            userLastName: json.userLastName,
            userUbigeo: json.userUbigeo,
            userCountry: json.userCountry,
            userDocumentType: json.userDocumentType,
            userDocumentNumber: json.userDocumentNumber,
            userPhone: UserPhone.create(json.userPhone),
            userCodeCountry: UserCodeCountry.create(json.userCodeCountry),
            clientId: json.clientId,
            status: json.status,
        };
    }
    static toDto(json: any): any {
        return {
            id: json.id,
            cip: json.cip,
            clientId: json.clientId,
            userName: json.userName,
            amount: json.amount,
            status: json.status,
            createdAt: json.createdAt,
            dateExpiry: json.dateExpiry
        }
    }
}