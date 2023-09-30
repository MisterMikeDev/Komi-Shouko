import {
    CommandInteractionOptionResolver,
    Interaction,
    EmbedBuilder
} from "discord.js";
import { Event, ExtendedInteraction } from "../Interfaces";
import { Emojis } from "../Data/Emojis";
export const event: Event = {
    name: "interactionCreate",
    run: async (Komi, interaction: Interaction): Promise<void> => {
        const { Util } = Emojis;
        const { No } = Util;
        if (interaction.isCommand()) {
            const SlashCommand = Komi.slashcommands.get(
                interaction.commandName
            );
            if (!SlashCommand) {
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setDescription(
                                `${No} | Estas usando un comando invalido.`
                            )
                            .setColor("#BE0000")
                    ],
                    ephemeral: true
                });
            } else {
                SlashCommand.run({
                    args: interaction.options as CommandInteractionOptionResolver,
                    Komi,
                    interaction: interaction as ExtendedInteraction
                });
            }
        }
    }
};
