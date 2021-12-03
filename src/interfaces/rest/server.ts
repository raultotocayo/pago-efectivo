import { FastifyInstance } from 'fastify'
import container from '../../../src/bootstrap/iocContainer'
import { CreateCipSchema } from '../schema/CreateCip'
import { ListCipSchema } from '../schema/ListCipSchema'
import { UpdateCipSchema } from '../schema/UpdateCipSchema'
import { general } from './../../../doc/general'
export const httpServer = async (fastify: FastifyInstance) => {
  fastify.register(require('fastify-swagger'), general)

  fastify.get('/', async (request, reply) => {
    reply.send({
      message: 'Hello World'
    })
  })
  fastify.post('/generate-cip', { schema: CreateCipSchema },
    (request, reply) => container.CreateCipController.execute(request, reply)
  )
  fastify.post('/update-cip', {schema:UpdateCipSchema},
    (request, reply) => container.UpdateCipController.execute(request, reply)
  )
  fastify.get('/list-cip/:clientId', {schema:ListCipSchema},
    (request, reply) => container.GetCipByClientController.execute(request, reply)
  )
  fastify.log.info(`HTTP server listening on ${process.env.PORT}`)
  fastify.listen(process.env.PORT, process.env.URL_SERVER, (err) => {
    if (err) {
      fastify.log.error(err)
    }
  })
  return fastify
}