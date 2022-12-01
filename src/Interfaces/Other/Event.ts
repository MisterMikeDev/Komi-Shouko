import Client from "../../Client";
import { ClientEvents } from "discord.js";

interface Run {
    (Komi: Client, ...args: any[]);
}

export interface Event {
    name: keyof ClientEvents;
    run: Run;
}
