import UserGlobalProfileData from "../../Schemas/UserData";
import { CommandInteraction, CacheType } from "discord.js";
import { Emojis } from "../../Data/Emojis";
import KomiClient from "../../Client";
export const Logout = async (
    _Komi: KomiClient,
    interaction: CommandInteraction<CacheType>
) => {
    const { Util } = Emojis;
    const { Yes, No } = Util;
    let userData = await UserGlobalProfileData.findOne({
        userId: interaction.user.id,
    });
    if (userData && !userData.loggedIn.isLogged) {
        interaction.reply({
            content: `${No} | No estas logeado.`,
            ephemeral: true,
        });
        return;
    }
    if (userData) {
        await UserGlobalProfileData.findOneAndUpdate({
            loggedIn: {
                isLogged: false,
                loggedAs: "",
            },
        });
        interaction.reply({
            content: `${Yes} | Te has deslogeado correctamente.`,
        });
        return;
    } else {
        interaction.reply({
            content: `${No} | No estas logeado.`,
        });
        return;
    }
};
