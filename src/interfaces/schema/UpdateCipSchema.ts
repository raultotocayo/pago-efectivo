export const UpdateCipSchema = {
    description: 'Enpoint para recibir evento',
    tags: ['Transaccion'],
    summary: 'Update Cip',
    body: {
        type: 'object',
        properties: {

            eventType: { type: 'string' },
            operationNumber: { type: 'number' },
            data: {
                type: 'object',
                properties: {
                    cip: { type: 'string' },
                    currency: { type: 'string' },
                    amount: { type: 'number' },
                    paymentDate: { type: 'string' },
                    transactionCode: { type: 'string' }
                }
            }

        }
    }
}


