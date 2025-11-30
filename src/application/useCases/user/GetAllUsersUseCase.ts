import { injectable, inject } from "inversify";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { TYPES } from "../../../infrastructure/di/types";

@injectable()
export class GetAllUsersUseCase {
    constructor(
        @inject(TYPES.UserRepository) private repo: UserRepository
    ) { }

    async execute() {
        return this.repo.findAll();
    }
}
