import fastify from "fastify";
import { fastifyRouteAdapter } from "./main/adapters/fastify-route-adapter";
import { makeCreateUserController } from "./main/factories/create-user";

const server = fastify()

server.get('/ping', fastifyRouteAdapter(makeCreateUserController()))

server.listen({ port: 3000 })
console.log('listening on port 3000 ;)')