export enum DiscordEvent //See https://github.com/OwenCalvin/discord.ts#events-and-payload
{
    ChannelCreate = "channelCreate",
    ChannelDelete = "channelDelete",
    ChannelPinsUpdate = "channelPinsUpdate",
    ChannelUpdate = "channelUpdate",
    ClientUserGuildSettingsUpdate = "clientUserGuildSettingsUpdate",
    ClientUserSettingsUpdate = "clientUserSettingsUpdate",
    Debug = "debug",
    Disconnect = "disconnect",
    EmojiCreate = "emojiCreate",
    EmojiDelete = "emojiDelete",
    EmojiUpdate = "emojiUpdate",
    Error = "error",
    GuildBanAdd = "guildBanAdd",
    GuildBanRemove = "guildBanRemove",
    GuildCreate = "guildCreate",
    GuildDelete = "guildDelete",
    GuildMemberAdd = "guildMemberAdd",
    GuildMemberAvailable = "guildMemberAvailable",
    GuildMemberRemove = "guildMemberRemove",
    GuildMembersChunk = "guildMembersChunk",
    GuildMemberSpeaking = "guildMemberSpeaking",
    GuildMemberUpdate = "guildMemberUpdate",
    GuildUnavailable = "guildUnavailable",
    GuildUpdate = "guildUpdate",
    GuildIntegrationsUpdate = "guildIntegrationsUpdate",
    Message = "message",
    MessageDelete = "messageDelete",
    MessageDeleteBulk = "messageDeleteBulk",
    MessageReactionAdd = "messageReactionAdd",
    MessageReactionRemove = "messageReactionRemove",
    MessageReactionRemoveAll = "messageReactionRemoveAll",
    MessageUpdate = "messageUpdate",
    PresenceUpdate = "presenceUpdate",
    RateLimit = "rateLimit",
    Ready = "ready",
    Reconnecting = "reconnecting",
    Resume = "resume",
    RoleCreate = "roleCreate",
    RoleDelete = "roleDelete",
    RoleUpdate = "roleUpdate",
    TypingStart = "typingStart",
    TypingStop = "typingStop",
    UserNoteUpdate = "userNoteUpdate",
    UserUpdate = "userUpdate",
    VoiceStateUpdate = "voiceStateUpdate",
    Warn = "warn",
    WebhookUpdate = "webhookUpdate"
}