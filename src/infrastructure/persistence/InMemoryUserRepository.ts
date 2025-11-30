import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async getById(id: string): Promise<User | null> {
        const user = this.users.find(user => user.id === id);
        return user || null;
    }
    async create(user: User): Promise<User> {
        this.users.push(user);
        console.log("User created:", user);
        console.log("Users:", this.users);

        return user;
    }
}