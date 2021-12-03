export const ListCipSchema = {
    description: 'Consulta lista de cip por cliente',
    tags: ['Servicio'],
    summary: 'Lista de cip generados',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          code: { type: 'string' },
          msg: { type: 'string' },
          data: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id:{type:'string'},
                cip:{type:'string'},
                clientId:{type:'string'},
                userName:{type:'string'},
                amount:{type:'string'},
                status:{type:'string'},
                createdAt:{type:'string'},
                dateExpiry:{type:'string'}                              
              }
            }
          }
        }
      }
    }
  }