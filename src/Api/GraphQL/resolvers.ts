import { Client } from "discord.js";

export const resolversF = (komi: Client) => {
    return {
        Query: {
            getKomiData: () => {
                komi.guilds.cache.forEach((sv) =>
                    console.log(sv.members.cache)
                );
                return komi.user;
            },
            getAllServers: () => {
                return komi.guilds.cache;
            }
        }
    };
};
