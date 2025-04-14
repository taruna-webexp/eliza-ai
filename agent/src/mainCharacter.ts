import { type Character, ModelProviderName } from "@elizaos/core";
import { defaultCharacter } from "./defaultCharacter";
export enum Clients {
    ALEXA = "alexa",
    DISCORD = "discord",
    DIRECT = "direct",
    TWITTER = "twitter",
    TELEGRAM = "telegram",
    TELEGRAM_ACCOUNT = "telegram-account",
    FARCASTER = "farcaster",
    LENS = "lens",
    AUTO = "auto",
    SLACK = "slack",
    GITHUB = "github",
    INSTAGRAM = "instagram",
    SIMSAI = "simsai",
    XMTP = "xmtp",
    DEVA = "deva",
}

export const mainCharacter: Character = {
    ...defaultCharacter,
    name: "AssureAgent",
    modelProvider: ModelProviderName.OPENAI,
    clients: [Clients.TWITTER],
    settings: {
        ...defaultCharacter.settings,
        secrets: {
            ...defaultCharacter.settings?.secrets,
            TWITTER_API_KEY: process.env.TWITTER_API_KEY ?? "",
            TWITTER_API_SECRET: process.env.TWITTER_API_SECRET ?? "",
            TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN ?? "",
            TWITTER_ACCESS_SECRET: process.env.TWITTER_ACCESS_SECRET ?? "",
        },
    },
};
