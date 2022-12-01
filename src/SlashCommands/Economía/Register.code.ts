import { CommandInteraction, CacheType } from "discord.js";
import { Emojis } from "../../Data/Emojis";
import { hashSync } from "bcryptjs";
import LoginData from "../../Schemas/LoginData";
import KomiClient from "../../Client";
export const RegisterCode = async (
    _Komi: KomiClient,
    interaction: CommandInteraction<CacheType>,   
    nickname: string,
    username: string,
    password: string
) => {
    const { Util } = Emojis;
    const { Yes, No } = Util;
let userFind = await LoginData.findOne({
        username: username,
    });
    if (userFind) {
        await interaction.deferReply({ ephemeral: true });
        interaction.followUp({
            content: `${No} | El usuario ya existe, intenta con otro nombre.`,
        });
        return;
    } else {
        let passwordHash = await hashSync(password, 10);
        let userData = new LoginData({
            nickname: nickname,
            username: username,
            password: passwordHash,
        });
        await userData.save();

        await interaction.deferReply({ ephemeral: false });
        interaction.followUp({
            content: `${Yes} | Usuario registrado con éxito, ya puedes acceder a la economía con \`/economía login\`.`,
        });
    }
}