export const CreateCipSchema = {
    description: 'Enpoint para crear un cip',
    tags: ['Transaccion'],
    summary: 'Create Cip',
    body: {
        type: 'object',
        required: [
            'currency',
            'amount',
            'transactionCode',
            'adminEmail',
            'dateExpiry',
            'paymentConcept',
            'additionalData',
            'userEmail',
            'userName',
            'userLastName',
            'userUbigeo',
            'userCountry',
            'userDocumentType',
            'userDocumentNumber',
            'userCodeCountry',
            'userPhone',
            'clientId',
        ],
        properties: {
            currency: { type: 'string' },
            amount: { type: 'number' },
            transactionCode: { type: 'string' },
            adminEmail: { type: 'string' },
            dateExpiry: { type: 'string' },
            paymentConcept: { type: 'string' },
            additionalData: { type: 'string' },
            userEmail: { type: 'string' },
            userName: { type: 'string' },
            userLastName: { type: 'string' },
            userUbigeo: { type: 'string' },
            userCountry: { type: 'string' },
            userDocumentType: { type: 'string' },
            userDocumentNumber: { type: 'string' },
            userCodeCountry: { type: 'string' },
            userPhone: { type: 'string' },
            clientId: { type: 'string' }
        }
    }
}


