import { InversifyExpressServer } from "inversify-express-utils"
import express from "express"
import { container } from "./infrastructure/di/inversify.config";
import "./infrastructure/http/UserController";


const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());
});

const app = server.build();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});