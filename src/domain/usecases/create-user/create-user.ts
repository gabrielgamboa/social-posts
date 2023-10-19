export interface CreateUserData {
    name: string;
    email: string;
    password: string;
}

export interface CreateUser {
  execute(data: CreateUserData): Promise<void>
}
