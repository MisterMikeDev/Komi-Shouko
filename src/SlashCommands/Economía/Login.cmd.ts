import {
    CommandInteraction,
    CacheType,
    ActionRowBuilder,
    ModalActionRowComponentBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
} from "discord.js";
import KomiClient from "../../Client";
export const Login = async (
    _Komi: KomiClient,
    interaction: CommandInteraction<CacheType>
) => {
    const { Short } = TextInputStyle;
    await interaction.showModal(
        new ModalBuilder()
            .setCustomId("loginEconomy")
            .setTitle("Logeate para acceder a la economía.")
            .addComponents(
                new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
                    new TextInputBuilder()
                        .setCustomId("loginEconomyUsername")
                        .setLabel("Username:")
                        .setPlaceholder("Username")
                        .setRequired(true)
                        .setMaxLength(25)
                        .setStyle(Short)
                ),
                new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(
                    new TextInputBuilder()
                        .setCustomId("loginEconomyPassword")
                        .setLabel("Password:")
                        .setPlaceholder("Password")
                        .setMinLength(4)
                        .setMaxLength(25)
                        .setRequired(true)
                        .setStyle(Short)
                )
            )
    );
};
