import { Config } from "../Data/Config";
import { connect } from "mongoose";
import chalk from "chalk";
export function MongoDBConnect() {
    connect(Config.MongoDBConfig.URI)
        .then((): void => {
            console.log(
                `${chalk.green("[+]")} Connected to ${chalk.green(
                    "MongoDB"
                )} ✅`
            );
        })
        .catch(({ message }: Error): void => {
            console.log(
                `${chalk.red(
                    "[x]"
                )} An error was detected connecting to the MongoDB database:\n${chalk.red(
                    "[^]",
                    message
                )}`
            );
        });
}
