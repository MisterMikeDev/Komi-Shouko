import express, { Application, json } from "express";
import cors from "cors";
import { Komi } from "../Client";
import { ColorText } from "../Helpers";
import mainRouter from "./routes/mainRouter.routes";
import { usePasswordToAccess } from "./controllers/usePasswordToAccess";
import { useKomiContext } from "./controllers/useKomiContext";

export class Api {
    public komi: Komi;
    public app: Application;
    public port: number;
    constructor(komi: Komi, port: string | number) {
        this.komi = komi;
        this.port = Number(port) || 3000;
        this.app = express();
        this.app.use(json());
        this.app.use(cors({ origin: "*" }));
        this.routes();
    }
    public routes() {
        const komiContext = useKomiContext(this.komi);
        this.app.use("/", usePasswordToAccess, komiContext, mainRouter);
    }
    public listen() {
        this.app.listen(this.port, () => {
            console.log(
                `${ColorText("Api", "yellowBright")} en ${ColorText(
                    `http://localhost:${this.port}`,
                    "blueBright"
                )} ✅`
            );
        });
    }
}
