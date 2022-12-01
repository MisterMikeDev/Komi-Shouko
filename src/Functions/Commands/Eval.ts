import { CacheType, EmbedBuilder, ModalSubmitInteraction } from "discord.js";
import { inspect } from "util";
import { Emojis } from "../../Data/Emojis";
export const Eval = async (
    interaction: ModalSubmitInteraction<CacheType>,
    CodeToEval: string
) => {
    const { No } = Emojis.Util;
    if (
        CodeToEval.includes("process.env.Token") ||
        CodeToEval.includes("process.env.MongoURL") ||
        CodeToEval.includes("Komi.destroy")
    ) {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`${No} | Codigo a evaluar invalido.`)
                    .setColor("#990000")
            ]
        });
        return;
    }
    try {
        let Code = await eval(CodeToEval);
        Code = inspect(Code, { depth: 0 });
        interaction.reply({
            content: `Código:\n\`\`\`js\n${CodeToEval}\`\`\`\nResultado:\n\`\`\`js\n${Code}\`\`\``
        });
    } catch (ErrorInCode) {
        interaction.reply({
            content: `Código:\n\`\`\`js\n${CodeToEval}\`\`\`\nHubo un error en el code:\n\`\`\`js\n${ErrorInCode}\`\`\``
        });
    }
};
