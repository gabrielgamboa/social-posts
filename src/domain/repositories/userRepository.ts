import { CreateUserData } from "../usecases/create-user/create-user";

export interface UserRepository {
    create(data: CreateUserData): Promise<void>
}