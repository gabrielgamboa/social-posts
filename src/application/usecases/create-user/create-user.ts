import { UserRepository } from "../../../domain/repositories/userRepository";
import { Encrypter } from "../../ports/Encrypter";
import { CreateUser, CreateUserData } from "../../../domain/usecases/create-user/create-user";

export class CreateUserUseCase implements CreateUser {
    constructor(
        private readonly encrypter: Encrypter,
        private readonly userRepository: UserRepository,
    ) {}

    async execute(data: CreateUserData): Promise<void> {
        const { email, name, password} = data;
        const hashedPassword = await this.encrypter.encrypt(password)
        await this.userRepository.create({ email, name, password: hashedPassword})
    }
}