import { User } from "../../../../domain/entities/User";
import { UserRepository } from "../../../../domain/repositories/userRepository";
import { CreateUserData } from "../../../../domain/usecases/create-user/create-user";

export class UserRepositoryInMemory implements UserRepository {
    users: User[] = []

    async create(data: CreateUserData): Promise<void> {
        this.users.push({
            ...data,
            id: crypto.randomUUID(),
        })
    }
}