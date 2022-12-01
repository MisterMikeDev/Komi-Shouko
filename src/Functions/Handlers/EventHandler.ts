import { readdirSync } from "fs";
import { join } from "path";
import chalk from "chalk";
import KomiClient from "../../Client";
export const EventHandler = (Komi: KomiClient): void => {
    const Path = join(__dirname, "..", "..", "Events");
    const events = readdirSync(Path).map(async (File): Promise<void> => {
        const { event } = await import(`${Path}/${File}`);
        Komi.events.set(event.name, event);
        Komi.on(event.name, event.run.bind(null, Komi));
        return event;
    }).length;
    console.log(
        `${chalk.green("[+]")} Se han cargado ${chalk.yellow(
            `${events}`
        )} eventos ✅`
    );
};
