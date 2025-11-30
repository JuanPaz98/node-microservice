import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ["query", "error", "info", "warn"],
});


async function test() {
    const users = await prisma.user.findMany();
    console.log(users);
}

test();