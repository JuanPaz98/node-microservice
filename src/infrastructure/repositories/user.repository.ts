import { injectable } from "inversify";
import { PrismaClient } from "../../generated/client";


const prisma = new PrismaClient();


@injectable()
export class UserRepository {

    async getAll() {
        return prisma.user.findMany();
    }

    async getById(id: number) {
        return prisma.user.findUnique({ where: { id } });
    }

    async create(data: { name: string; email: string }) {
        return prisma.user.create({ data });
    }
}
