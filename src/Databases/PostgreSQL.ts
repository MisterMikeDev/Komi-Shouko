import { Config } from "../Data/Config";
import { Pool } from "pg";
import chalk from "chalk";
const { PostgreSQLConfig } = Config;
const PoolDB = new Pool(PostgreSQLConfig);
PoolDB.connect()
    .then(() =>
        console.log(
            `${chalk.green("[+]")} Connected to database ${chalk.magenta(
                PostgreSQLConfig.database
            )} as user ${chalk.red(
                PostgreSQLConfig.user
            )} on port ${chalk.yellowBright(PostgreSQLConfig.port)}`
        )
    )
    .catch(({ message }: Error): void => {
        console.log(
            `${chalk.red(
                "[x]"
            )} An error was detected connecting to the PostgreSQL database:\n${chalk.red(
                "[^]",
                message
            )}`
        );
    });

export default PoolDB;
