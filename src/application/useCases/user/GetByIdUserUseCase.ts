import { inject, injectable } from "inversify";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { TYPES } from "../../../infrastructure/di/types";

@injectable()
export class GetByIdUserUseCase {
    constructor(
        @inject(TYPES.UserRepository) private repo: UserRepository
    ) { }

    async execute(id: string) {
        return this.repo.getById(id);
    }
}
