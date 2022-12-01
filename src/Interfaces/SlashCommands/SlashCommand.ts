import { CommandType } from "./SlashCommandsInterface";

export class SlashCommandStructure {
    constructor(commandOptions: CommandType) {
        Object.assign(this, commandOptions);
    }
}
