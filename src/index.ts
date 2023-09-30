console.clear();
import { config } from "dotenv";
config();
import { Komi } from "./Client";
import { Api } from "./Api";
import { Config } from "./Data/Config";

async function main() {
    const komi = await new Komi().start();
    new Api(komi, Config.API.Port).listen();
}

main();
