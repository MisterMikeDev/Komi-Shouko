import { PoolConfig } from "pg";
export const Config = {
    PostgreSQLConfig: {
        user: process.env.PG_USER || "postgre",
        password: process.env.PG_PASSWORD || "postgre",
        host: process.env.PG_HOST || "localhost",
        port: process.env.PG_POST || 5432,
        database: process.env.PG_DATABASE || "postgre"
    } as PoolConfig,
    MongoDBConfig: {
        URI: process.env.MONGO_URI || "mongodb+srv://localhost"
    },
    DiscordBot: {
        IdAuthor: "437308398845952001",
        Client: "",
        ClientSecret: "",
        Token: process.env.BOT_TOKEN || "",
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
            ID: "",
            WelcomeChannel: "",
            GoodbyeChannel: "",
            TicketChannel: "",
            BlacklistChannel: "",
            RuleChannel: "",
            AnnouncementChannel: "",
            AutoRolesChannel: "",
            ReportChannel: "",
            WarningChannel: "",
            StatusChannel: "",
            SuggestChannel: "",
            BoostChannel: "",
            BumpChannel: "",
            AddServerChannel: "",
            RemoveServerChannel: ""
        }
    }
};
