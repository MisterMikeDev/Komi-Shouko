/* eslint-disable no-unused-vars */
import { Komi } from "../../Client";
import { ClientEvents } from "discord.js";

interface Run {
    (Komi: Komi, ...args: any[]);
}

export interface Event {
    name: keyof ClientEvents;
    run: Run;
}
