import { ActivitiesOptions } from "discord.js";
import chalk from "chalk";
import KomiClient from "../../Client";
export const setPresence = (Komi: KomiClient): void => {
    setInterval((): void => {
        const Status: ActivitiesOptions[] = [
            { name: "Mencioname por ayuda.", type: 1 },
            { name: `Vigilando ${Komi.guilds.cache.size} servers.`, type: 1 },
            { name: `Vigilando ${Komi.channels.cache.size} canales.`, type: 1 },
            { name: `Vigilando ${Komi.users.cache.size} usuarios.`, type: 1 },
            { name: "🌸 Komi Shouko Support 🌸", type: 1 }
        ];
        Komi.user?.setPresence({
            status: "online",
            activities: [Status[Math.floor(Math.random() * Status.length)]]
        });
    }, 15000);
    console.log(
        `${chalk.green("[+]")} ${chalk.magenta(`${"Komi Shouko"}`)} lista ✅`
    );
};
