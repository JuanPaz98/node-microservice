import { injectable, inject } from "inversify";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { TYPES } from "../../../infrastructure/di/types";
import { User } from "../../../domain/entities/User";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject(TYPES.UserRepository) private repo: UserRepository
    ) { }

    async execute(data: User) {
        return this.repo.create(data);
    }
}
