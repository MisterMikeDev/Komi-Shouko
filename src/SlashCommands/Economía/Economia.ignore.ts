import {
    ApplicationCommandOptionType,
    CommandInteractionOptionResolver,
} from "discord.js";
import { SlashCommandStructure } from "../../Interfaces";
import { Login } from "./Login.cmd";
import { Logout } from "./Logout.cmd";
import { Register } from "./Register.cmd";
import { Shop } from "./Shop.cmd";
export default new SlashCommandStructure({
    name: "economía",
    description: "Sub SlashCommands de Economía.",
    options: [
        {
            name: "register",
            description: "Registra un perfil para la economía.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "login",
            description: "Logeate para acceder a la economía.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "logout",
            description: "Cierra la sesión de tu perfil de la economía.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "balance",
            description: "Muestra tu saldo de la economía.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "work",
            description: "Trabaja en para obtener dinero.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "deposit",
            description: "Deposita dinero en el banco.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "withdraw",
            description: "Saca dinero del banco.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "leaderboard",
            description: "Muestra el ranking de la economía.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "shop",
            description: "Muestra la tienda de la economía.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "buy",
            description: "Compra un item de la tienda.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "sell",
            description: "Vende un item para obtener dinero.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "inventory",
            description: "Muestra tu inventario.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "use",
            description: "Usa un item de tu inventario.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "gift",
            description: "Envia un item a un usuario.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "mine",
            description: "Trabaja en las minas para obterner materiales.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "mine-info",
            description:
                "Muestra información de las minas disponibles para minar.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "mine-select",
            description: "Selecciona una mina para trabajar.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "fish",
            description: "Pesca en el lago para obtener peces.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "fish-info",
            description:
                "Muestra información de los lagos disponibles para pescar.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "fish-select",
            description: "Selecciona un lago para pescar.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "felling",
            description: "Trabaja en las montañas para obtener materiales.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "felling-info",
            description:
                "Muestra información de las montañas disponibles para trabajar.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "felling-select",
            description: "Selecciona una montaña para trabajar.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "plow",
            description: "Planta una semilla para obtener materiales.",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "plow-info",
            description:
                "Muestra información de las semillas disponibles para plantar.",
            type: ApplicationCommandOptionType.Subcommand,
        },
    ],
    run: async ({ Komi, interaction }): Promise<void> => {
        const interactionOptions =
            interaction.options as CommandInteractionOptionResolver;
        switch (interactionOptions.getSubcommand()) {
            case "shop":
                Shop(Komi, interaction);
                break;
            case "login":
                Login(Komi, interaction);
                break;
            case "register":
                Register(Komi, interaction);
                break;
            case "logout":
                Logout(Komi, interaction);
                break;
        }
        /*
            "register"✓
            "login"✓
            "logout"✓
            "balance"
            "work"
            "deposit"
            "withdraw"
            "leaderboard"
            "shop"✓
            "buy"
            "sell"
            "inventory"
            "use"
            "gift"
            "mine"
            "mine-info"
            "mine-select"
            "fish"
            "fish-info"
            "fish-select"
            "felling"
            "felling-info"
            "felling-select"
            "plow"
            "plow-info"
            "plow-select"
        */
    },
});
