import { CreateUserUseCase } from "../../application/usecases/create-user/create-user";
import { UserRepositoryInMemory } from "../../infra/db/in-memory/user-repository/user-repository"
import { BcryptAdapter } from "../../infra/encrypt/bcrypt-adapter";
import { CreateUserController } from "../../presentation/controllers/create-user/create-user"
import { EmailValidatorAdapter } from "../../utils/email-validator-adapter";

const SALT = 12

export const makeCreateUserController = (): CreateUserController => {
  const userRepository = new UserRepositoryInMemory();
  const emailValidator = new EmailValidatorAdapter();

  const encrypter = new BcryptAdapter(SALT);
  const createUserUseCase = new CreateUserUseCase(encrypter, userRepository);

  const createUserController = new CreateUserController(emailValidator, createUserUseCase)
  return createUserController
}
