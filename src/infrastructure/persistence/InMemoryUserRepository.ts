import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async getAll(): Promise<User[]> {
        return this.users;
    }

    async getById(id: string) {
        const user = await prisma.user.findUnique({
            where: { id }
        });

        return user ? { ...user, id: String(user.id) } : null;
    }

    async create(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }
}