import { Config } from "../Data/Config";
import { ColorText } from "../Helpers";
import { Event } from "../Interfaces";
export const event: Event = {
    name: "ready",
    run: (komi) => {
        const { Status } = Config.DiscordBot;
        const arrayStatus = Status(komi);
        console.log(
            `${ColorText(`${komi.user?.tag}`, "magentaBright")} en linea ✅`
        );

        setInterval(() => {
            komi.user?.setPresence({
                activities: [
                    arrayStatus[Math.floor(Math.random() * arrayStatus.length)]
                ],
                status: "online"
            });
        }, 10000);
    }
};
