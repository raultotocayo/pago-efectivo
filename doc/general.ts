
export const general = {
  routePrefix: '/doc',
  swagger: {
    openapi: '3.0.0',
    info: {
      title: 'Core service pay',
      description: 'Documentación de las rutas de consulta',
      version: '0.1.0'
    },
    host: `${process.env.URL_SERVER}:${process.env.PORT}`,
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
      { name: 'Demo', description: 'Endpoints de consulta' }
    ],
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        name: 'apiKey',
        in: 'header'
      }
    }
  },
  exposeRoute: true
}

