import { ApplicationCommandOptionType, ChatInputCommandInteraction } from "discord.js";
import { SlashCommandStructure } from "../../Interfaces";
export default new SlashCommandStructure({
    name: "musica",
    description: "Escucha musica en los canales de voz.",
    options: [
        {
            name: "setup",
            description: "Genera un canal con un tablero de musica.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "play",
            description: "Reproduce o añade una canción a la queue.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "pause",
            description: "Pausa la canción en reproducción.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "resume",
            description: "Despausa la canción en reproducción.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "stop",
            description: "Deten la queue.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "previous",
            description: "Regresa a la canción anterior.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "skip",
            description: "Skipea a la siguiente canción.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "volume-minus",
            description: "Disminuye el volumen.",
            type: ApplicationCommandOptionType.Subcommand
        },
        {
            name: "volume-plus",
            description: "Aumenta el volumen.",
            type: ApplicationCommandOptionType.Subcommand
        },
    ],
    run: ({Komi, interaction}) => {
        switch ((interaction as ChatInputCommandInteraction).options.getSubcommand()) {
            case "play":
                console.log("Play")
                break;
        
            default:
                console.log("No programado")
                break;
        }
    }
})