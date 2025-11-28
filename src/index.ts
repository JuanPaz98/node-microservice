import express from "express";
import type { Request, Response } from "express";

const app = express.application;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express with TypeScript");
});

app.get("/cositas", (req: Request, res: Response) => {
    const cositas = ["Cosita 1", "Cosita 2", "Cosita 3"];
    res.send(cositas);
});

app.get("/cositas/:id", (req: Request, res: Response) => {
    const cositas = ["Cosita 1", "Cosita 2", "Cosita 3"];
    if (req.params.id) {
        res.send("seleccionaste" + " " + cositas[parseInt(req.params.id)]);
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
