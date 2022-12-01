import { CommandInteraction, CacheType } from "discord.js";
import { Emojis } from "../../Data/Emojis";
import { compareSync } from "bcryptjs";
import UserGlobalProfileData from "../../Schemas/UserData";
import LoginData from "../../Schemas/LoginData";
import KomiClient from "../../Client";
export const LoginCode = async (
    _Komi: KomiClient,
    interaction: CommandInteraction<CacheType>,
    username: string,
    password: string
) => {
    const { Util } = Emojis;
    const { Yes, No } = Util;
    const userData = await UserGlobalProfileData.findOne({
        userId: interaction.user.id
    });
    if (userData && userData.loggedIn.isLogged) {
        await interaction.deferReply({ ephemeral: false });
        interaction.followUp({
            content: `${No} | Ya estas logeado como **${userData.loggedIn.loggedAs}**, para deslogearte usa \`/economía logout\`.`
        });
        return;
    }
    const userFind = await LoginData.findOne({
        username: username
    });
    if (userFind) {
        const passwordCompare = compareSync(password, userFind.password);
        if (username === userFind.username && passwordCompare) {
            if (userData) {
                await UserGlobalProfileData.findOneAndUpdate({
                    loggedIn: {
                        isLogged: true,
                        loggedAs: `${userFind.nickname}`
                    }
                });
            } else {
                const newUserData = new UserGlobalProfileData({
                    userId: interaction.user.id,
                    badges: [],
                    isBlacklisted: false,
                    loggedIn: {
                        isLogged: true,
                        loggedAs: `${userFind.nickname}`
                    }
                });

                await newUserData.save();
            }
            await interaction.deferReply({ ephemeral: false });
            interaction.followUp({
                content: `${Yes} | Bienvenido **${userFind.nickname}**.`
            });
        }
    } else {
        await interaction.deferReply({ ephemeral: true });
        interaction.followUp({
            content: `${No} | Usuario o contraseña incorrecta.`
        });
    }
};
