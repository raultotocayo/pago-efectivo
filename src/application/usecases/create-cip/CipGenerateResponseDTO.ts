export interface CipGenerateResponseDTO {
    cip: string,
    currency: string,
    amount: number,
    transactionCode: string,
    dateExpiry: string,
    cipUrl: string
}