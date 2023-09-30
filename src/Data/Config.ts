import { ActivitiesOptions, ActivityType } from "discord.js";
import { Komi } from "../Client";

const PORT = process.env.PORT ?? 3000;

const StatusActivity: ActivitiesOptions = {
    type: ActivityType.Streaming,
    name: ""
};

const devStatus = (Komi: Komi): ActivitiesOptions[] => [
    {
        name: `En desarrollo de ${Komi.user?.tag}.`,
        type: ActivityType.Watching
    }
];

const productionStatus = (Komi: Komi): ActivitiesOptions[] => [
    {
        ...StatusActivity,
        name: "Mencioname por ayuda."
    },
    {
        ...StatusActivity,
        name: `Vigilando ${Komi.guilds.cache.size} servers.`
    },
    {
        ...StatusActivity,
        name: `Vigilando ${Komi.channels.cache.size} canales.`
    },
    {
        ...StatusActivity,
        name: `Vigilando ${Komi.users.cache.size} usuarios.`
    },
    {
        ...StatusActivity,
        name: "🌸 Komi Shouko Support 🌸"
    }
];

export const Config = {
    API: {
        ClientURL: "https://komishouko.me",
        JWTSecret: process.env.JWT_SECRET ?? "",
        ESSecret: process.env.EXPRESS_SECRET ?? "",
        Port: PORT
    },
    DiscordBot: {
        IdAuthor: "437308398845952001",
        Client: process.env.BOT_CLIENT_ID ?? "",
        ClientSecret: process.env.BOT_CLIENT_SECRET ?? "",
        CallbackURL: `http://localhost:${PORT}/api/auth/callback`,
        Token: process.env.BOT_TOKEN ?? "",
        Intents: [
            "Guilds",
            "GuildMembers",
            "GuildBans",
            "GuildEmojisAndStickers",
            "GuildIntegrations",
            "GuildWebhooks",
            "GuildInvites",
            "GuildVoiceStates",
            "GuildPresences",
            "GuildMessages",
            "GuildMessageReactions",
            "GuildMessageTyping",
            "DirectMessages",
            "DirectMessageReactions",
            "DirectMessageTyping",
            "MessageContent",
            "GuildScheduledEvents"
        ] as [
            "Guilds",
            "GuildMembers",
            "GuildBans",
            "GuildEmojisAndStickers",
            "GuildIntegrations",
            "GuildWebhooks",
            "GuildInvites",
            "GuildVoiceStates",
            "GuildPresences",
            "GuildMessages",
            "GuildMessageReactions",
            "GuildMessageTyping",
            "DirectMessages",
            "DirectMessageReactions",
            "DirectMessageTyping",
            "MessageContent",
            "GuildScheduledEvents"
        ],
        SupportServer: {
            ID: "887356477222834196",
            WelcomeChannel: "887362027956371507",
            GoodbyeChannel: "887396817422131270",
            TicketChannel: "906033474840977510",
            BlacklistChannel: "888929822057852959",
            RuleChannel: "888294653894475797",
            AnnouncementChannel: "888558615668097024",
            AutoRolesChannel: "888293884839489537",
            ReportChannel: "911110904245026816",
            WarningChannel: "911111820452958208",
            StatusChannel: "888985718339305504",
            SuggestChannel: "888985392332816385",
            BoostChannel: "888279201000591391",
            BumpChannel: "888555706821795871",
            AddServerChannel: "911110421711298590",
            RemoveServerChannel: "911110421711298590"
        },
        Status: process.env.ENV === "dev" ? devStatus : productionStatus
    }
};
