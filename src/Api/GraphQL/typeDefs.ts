import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Guild {
        id: String!
        name: String!
        icon: String!
        features: [String]!
        splash: String!
        banner: String
        description: String!
        verificationLevel: Int!
        nsfwLevel: Int!
        premiumSubscriptionCount: Int!
        discoverySplash: String
        memberCount: Int!
        afkChannelId: String
        systemChannelId: String!
        premiumTier: Int!
        explicitContentFilter: Int!
        mfaLevel: Int!
        joinedTimestamp: Int!
        preferredLocale: String!
        ownerId: String!
        emojis: [Emoji]
        stickers: [Sticker]
        members: [Member]
        channels: { guild: [Circular *2] }
        roles: { guild: [Circular *2] }
    }

    type User {
        id: String!
        bot: Boolean!
        system: Boolean!
        username: String!
        discriminator: String!
        avatar: String!
        banner: String!
        accentColor: String!
        _roles: [String]!
    }

    type Emoji {
        animated: Boolean!
        name: String!
        id: String!
        guild: Guild,
        requiresColons: Boolean!
        managed: Boolean!
        available: Boolean!
    }

    type Sticker {
        id: String!
        description: String!
        type: Int!
        format: Int!
        name: String!
        tags: String!
        available: Boolean!
        guildId: String!
    }

    type Member {
        guild: Guild!
        joinedTimestamp: Int!
        nickname: String!
        pending: Boolean!
        _roles: [String]!
        user: User!
    }

    type KomiBot {
        id: String!
        bot: Boolean!
        system: Boolean!
        username: String!
        discriminator: String!
        avatar: String!
        banner: String
        accentColor: Int
        verified: Boolean!
        mfaEnabled: Boolean!
    }

    type lang {
        id: ID!
        name: String!
    }

    type Query {
        getKomiData: KomiBot!
        getAllServers: [lang]!
    }
`;

/*

*/
