import { injectable } from "inversify";
import { prisma } from "../config/prisma.config";
import { UserRepository } from "../../domain/repositories/UserRepository";

@injectable()
export class UserRepositoryImpl implements UserRepository {

	async getAll() {
		const users = await prisma.user.findMany();
		return users.map(user => ({ ...user, id: String(user.id) }));
	}
	async getById(id: string) {
		const user = await prisma.user.findUnique({ where: { id } });
		return user ? { ...user, id: String(user.id) } : null;
	}

	async create(data: { name: string; email: string }) {
		const user = await prisma.user.create({ data });
		return { ...user, id: String(user.id) };
	}
}
