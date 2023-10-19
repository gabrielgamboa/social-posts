import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserController } from '../../presentation/controllers/create-user/create-user'
import { HttpRequest } from '../../presentation/ports/http'

export const fastifyRouteAdapter = (controller: CreateUserController) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }

    const httpResponse = await controller.handle(httpRequest)
    reply.status(httpResponse.statusCode).send(httpResponse.body)
  }
}
