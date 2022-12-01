import express, { Application, Response, Request, json } from "express";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolversF } from "./GraphQL";
import { Config } from "../Data/Config";
import { Client } from "discord.js";
import chalk from "chalk";
import cors from "cors";
export class ApiRest {
    api: Application;
    port: number;
    komi: Client;
    constructor(komiClient: Client, portConstructor?: number) {
        this.komi = komiClient;
        this.port = Number(process.env.PORT || portConstructor || 5000);
        this.api = express();
        this.gql();
        this.config();
        this.routes();
    }
    start() {
        try {
            this.api.listen(this.port, () => {
                console.log(
                    `${chalk.green("[+]")} ${chalk.blue(
                        `${"Api Rest"}`
                    )} on port ${chalk.cyan(`${"http://localhost:5001"}`)} ✅`
                );
            });
        } catch (e) {
            console.log(
                `${chalk.red("[x]")} ${chalk.blue(
                    `${"Api Rest"}`
                )} not can started: ${chalk.red(e)}`
            );
        }
    }
    gql() {
        const resolvers = resolversF(this.komi);
        try {
            (async () => {
                const Apollo = new ApolloServer({
                    typeDefs,
                    resolvers
                });
                await Apollo.start();
                Apollo.applyMiddleware({ app: this.api });
                console.log(
                    `${chalk.green("[+]")} ${chalk.magentaBright(
                        `${"GraphQL Api"}`
                    )} on port ${chalk.cyan(
                        `${"http://localhost:5001/graphql"}`
                    )} ✅`
                );
            })();
        } catch (e) {
            console.log(
                `${chalk.red("[x]")} ${chalk.magentaBright(
                    `${"GraphQL Api"}`
                )} not can started: ${chalk.red(e)}`
            );
        }
    }
    config() {
        this.api.use(json());
        this.api.use(cors());
    }
    routes() {
        this.api.get("/", (_res: Request, res: Response) => {
            res.json({
                status: "Api en linea."
            });
        });
        this.api.get("/developer", (_res: Request, res: Response) => {
            res.json(this.komi.users.resolve(Config.DiscordBot.IdAuthor));
        });
    }
}
