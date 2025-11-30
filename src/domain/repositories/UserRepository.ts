import { User } from "../entities/User";

export interface UserRepository {
    findAll(): Promise<User[]>;
    getById(id: string): Promise<User | null>;
    create(user: User): Promise<User>;
}