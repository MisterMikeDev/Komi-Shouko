import { Instance, Color } from "chalk";

const chalk = new Instance();

export function ColorText(text: string, color: typeof Color, log?: boolean) {
    return log
        ? console.log(chalk[color](text ?? ""))
        : chalk[color](text ?? "");
}
