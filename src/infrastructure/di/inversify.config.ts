import { Container } from "inversify";
import { TYPES } from "./types";
import { CreateUserUseCase } from "../../application/useCases/user/CreateUserUseCase";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { InMemoryUserRepository } from "../persistence/InMemoryUserRepository";
import { UserController } from "../http/UserController";
import { GetAllUsersUseCase } from "../../application/useCases/user/GetAllUsersUseCase";
import { GetByIdUserUseCase } from "../../application/useCases/user/GetByIdUserUseCase";

const container = new Container();

// Bindings
// Repos
container.bind<UserRepository>(TYPES.UserRepository).to(InMemoryUserRepository);


// Use Cases
container.bind<CreateUserUseCase>(TYPES.CreateUserUseCase).to(CreateUserUseCase);
container.bind<GetByIdUserUseCase>(TYPES.GetByIdUserUseCase).to(GetByIdUserUseCase);
container.bind<GetAllUsersUseCase>(TYPES.GetAllUsersUseCase).to(GetAllUsersUseCase);


// Controllers
container.bind<UserController>(TYPES.UserController).to(UserController);

export { container };