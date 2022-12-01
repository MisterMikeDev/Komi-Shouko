import { Event } from "../Interfaces";
import { setPresence } from "../Functions";
import { ApiRest } from "../Api";
export const event: Event = {
    name: "ready",
    run: (Komi) => {
        new ApiRest(Komi, 5001).start();
        setPresence(Komi);
    }
};
