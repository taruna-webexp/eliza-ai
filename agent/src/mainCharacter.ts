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
};
