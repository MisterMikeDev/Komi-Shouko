import {
    CommandInteractionOptionResolver,
    Interaction,
    EmbedBuilder
} from "discord.js";
import { Event, ExtendedInteraction } from "../Interfaces";
import { Emojis } from "../Data/Emojis";
import { EvalCode as evalCode } from "../SlashCommands/Owner/Eval.cmd";
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
        } else if (interaction.isModalSubmit()) {
            switch (interaction.customId) {
                case "evalModalCommand":
                    const codeEval = interaction.fields.getTextInputValue(
                        "evalModalCommandInput"
                    );
                    /* eslint-disable indent */
                    codeEval
                        ? evalCode(interaction, codeEval)
                        : interaction.reply({
                              content: "❌ | Codigo invalido."
                          });
                    /* eslint-enable indent*/
                    break;
                case "loginEconomy":
                    const usernameLogin = interaction.fields.getTextInputValue(
                        "loginEconomyUsername"
                    );
                    const passwordLogin = interaction.fields.getTextInputValue(
                        "loginEconomyPassword"
                    );
                    console.log(usernameLogin, passwordLogin);
                    break;
                case "registerEconomy":
                    const nicknameRegister =
                        interaction.fields.getTextInputValue(
                            "registerEconomyNickname"
                        );
                    const usernameRegister =
                        interaction.fields.getTextInputValue(
                            "registerEconomyUsername"
                        );
                    const passwordRegister =
                        interaction.fields.getTextInputValue(
                            "registerEconomyPassword"
                        );
                    console.log(
                        nicknameRegister,
                        usernameRegister,
                        passwordRegister
                    );
                    break;
            }
        }
    }
};
