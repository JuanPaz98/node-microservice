import { controller, httpGet, httpPost, request, requestParam, response } from "inversify-express-utils";
import { inject } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../di/types";
import { CreateUserUseCase } from "../../application/useCases/user/CreateUserUseCase";
import { GetAllUsersUseCase } from "../../application/useCases/user/GetAllUsersUseCase";
import { GetByIdUserUseCase } from "../../application/useCases/user/GetByIdUserUseCase";

@controller("/users")
export class UserController {

    constructor(
        @inject(TYPES.CreateUserUseCase) private createUserUseCase: CreateUserUseCase,
        @inject(TYPES.GetAllUsersUseCase) private getAllUsersUseCase: GetAllUsersUseCase,
        @inject(TYPES.GetByIdUserUseCase) private getByIdUserUseCase: GetByIdUserUseCase,
    ) { }

    @httpGet("/")
    async getAll(
        @response() res: Response
    ) {
        const users = await this.getAllUsersUseCase.execute();
        console.log("Fetched users:", users);
        return res.json(users);
    }

    @httpGet("/:id")
    async getById(
        @requestParam("id") id: string,
        @response() res: Response
    ) {
        const users = await this.getByIdUserUseCase.execute(id);
        return res.json(users);
    }


    @httpPost("/")
    async create(
        @request() req: Request,
        @response() res: Response
    ) {
        const user = await this.createUserUseCase.execute({
            id: crypto.randomUUID(),
            ...req.body
        });

        return res.status(201).json(user);
    }
}

