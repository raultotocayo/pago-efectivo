export interface UpdateCipDTO {
    eventType: string,
    operationNumber: string,
    data: {
        cip: string,
        currency: string,
        amount: number,
        paymentDate: string,
        transactionCode: string
    }

}