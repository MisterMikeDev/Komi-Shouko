import { readdirSync } from "fs";
import { join } from "path";
import { Komi } from "../Client";
import { Event } from "../Interfaces";
export const EventHandler = (Komi: Komi): void => {
    const Path = join(__dirname, "..", "Events");
    readdirSync(Path).map(async (File): Promise<void> => {
        if (File.includes(".tests.")) return;
        const { event } = await import(`${Path}/${File}`);
        const { name, run }: Event = event;
        Komi.on(name, (...args) => run(Komi, ...args));
        return event;
    });
};
