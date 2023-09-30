import { Message } from "discord.js";
import { Event } from "../Interfaces";
export const event: Event = {
    name: "messageCreate",
    run: async (Komi, messageEvent: Message) => {
        Komi;
        messageEvent;
    }
};
