import {
    ActionRowBuilder,
    CacheType,
    CommandInteraction,
    ModalActionRowComponentBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    EmbedBuilder,
    ModalSubmitInteraction,
} from "discord.js";
import KomiClient from "../../Client";
import { NoPerms } from "../../Functions";
import { inspect } from "util";
import { Emojis } from "../../Data/Emojis";

export const Eval = async (
    _Komi: KomiClient,
    interaction: CommandInteraction<CacheType>
) => {
    if (NoPerms(interaction, "onlyDev")) {
        return;
    }
    const { Paragraph } = TextInputStyle;
    await interaction.showModal(
        new ModalBuilder()
            .setCustomId("evalModalCommand")
            .setTitle("Evalua un código.")
            .addComponents(
                new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
                    new TextInputBuilder()
                        .setCustomId("evalModalCommandInput")
                        .setLabel("Código:")
                        .setPlaceholder(
                            'interaction.channel.send("Hola mundo")'
                        )
                        .setRequired(true)
                        .setStyle(Paragraph)
                )
            )
    );
};

const BlockCode = ["process.env", "process.env", "Komi.destroy", "PoolDB"];

export let EvalCode = async (
    interaction: ModalSubmitInteraction<CacheType>,
    CodeToEval: string
) => {
    const { Util } = Emojis;
    const { No } = Util;
    if (BlockCode.includes(CodeToEval)) {
        interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setDescription(`${No} | Codigo a evaluar invalido.`)
                    .setColor("#990000"),
            ],
        });
        return;
    }
    try {
        let Code: String = await eval(CodeToEval);
        Code = inspect(Code, { depth: 0 });
        interaction.reply({
            content: `Código:\n\`\`\`js\n${CodeToEval}\`\`\`\nResultado:\n\`\`\`js\n${Code}\`\`\``,
        });
    } catch (ErrorInCode) {
        interaction.reply({
            content: `Código:\n\`\`\`js\n${CodeToEval}\`\`\`\nHubo un error en el code:\n\`\`\`js\n${ErrorInCode}\`\`\``,
        });
    }
};
