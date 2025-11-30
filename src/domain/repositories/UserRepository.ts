import { User } from "../entities/User";

export interface UserRepository {
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    create(user: User): Promise<User>;
}