import { CreateUser } from "../../../domain/usecases/create-user/create-user";
import { InvalidParamError } from "../../errors/invalid-param-error";
import { MissingParamError } from "../../errors/missing-param-error";
import { badRequest, ok } from "../../helpers/http-helper";
import { Controller } from "../../ports/controller";
import { HttpRequest, HttpResponse } from "../../ports/http";

export interface EmailValidator {
    isValid(email: string): boolean
}

export class CreateUserController implements Controller {
    constructor (
        private readonly emailValidator: EmailValidator,
        private readonly createUserUseCase: CreateUser,
    ) {}

    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        const requiredFields = ['name', 'email', 'password']

        for (const field of requiredFields) {
          if (!httpRequest.body[field]) {
            return badRequest(new MissingParamError(field))
          }
        }

        const { name, email, password } = httpRequest.body;

        if (!this.emailValidator.isValid(email)) return badRequest(new InvalidParamError('email'))

        await this.createUserUseCase.execute({ email, name, password })
        return ok('Conta criada com sucesso!')
    }
}