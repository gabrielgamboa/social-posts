import { UserRepository } from "../../../../domain/repositories/userRepository";
import { CreateUserData } from "../../../../domain/usecases/create-user/create-user";

export class UserRepositoryPrisma implements UserRepository {
    create(data: CreateUserData): Promise<void> {
        
    }
}