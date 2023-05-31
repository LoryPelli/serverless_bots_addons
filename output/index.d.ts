export declare function deferReply(interaction: {
    id: String;
    token: String;
}, options: InteractionDeferredOptions, token?: String): Promise<void>;
export declare function updateDefer(interaction: {
    id: String;
    token: String;
}, options: InteractionDeferredOptions, token?: String): Promise<void>;
export declare function showModal(interaction: {
    id: String;
    token: String;
}, options: ModalOptions, token?: String): Promise<void>;
export declare function autocompleteResult(interaction: {
    id: String;
    token: String;
}, options: AutocompleteOptions, token?: String): Promise<void>;
export declare function followup(interaction: {
    id: String;
    token: String;
}, options: FollowupOptions, token?: String): Promise<void>;
export declare function editFollowup(interaction: {
    id: String;
    token: String;
    message: any;
}, options: FollowupOptions, token?: String): Promise<void>;
export declare function get(interaction: {
    data: Data;
}, value: String): String | undefined;
export declare function createSlashCommand(options: SlashCommand, token?: String): Promise<void>;
export declare enum ApplicationCommandTypes {
    CHAT_INPUT = 1,
    USER = 2,
    MESSAGE = 3
}
export declare enum ApplicationCommandOptionTypes {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP = 2,
    STRING = 3,
    INTEGER = 4,
    BOOLEAN = 5,
    USER = 6,
    CHANNEL = 7,
    ROLE = 8,
    MENTIONABLE = 9,
    NUMBER = 10,
    ATTACHMENT = 11
}
export declare enum ChannelTypes {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_ANNOUNCEMENT = 5,
    ANNOUNCEMENT_THREAD = 10,
    PUBLIC_THREAD = 11,
    PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13,
    GUILD_DIRECTORY = 14,
    GUILD_FORUM = 15
}
export interface ModalOptions {
    title: String;
    custom_id: String;
    components: ActionRow[];
}
export interface InteractionDeferredOptions {
    ephemeral: Boolean;
}
export interface FollowupOptions {
    content?: String;
    embeds?: Embeds[];
    components?: ActionRow[];
}
export interface AutocompleteOptions {
    choices: Choices[];
}
export interface Embeds {
    title?: String;
    type?: String;
    description?: String;
    url?: String;
    timestamp?: Date | Number;
    color?: Number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedImage;
    author?: EmbedAuthor;
    fields?: EmbedFields[];
}
export interface ActionRow {
    type: 1;
    components: ButtonsComponent[] | SelectMenusComponent[] | TextInputsComponent[];
}
interface BaseComponent {
    type: Number;
}
export interface ButtonsComponent extends BaseComponent {
    custom_id?: String;
    style: Number;
    label?: String;
    emoji?: String;
    url?: String;
    disabled?: String;
}
export interface SelectMenusComponent extends BaseComponent {
    custom_id: String;
    options?: SelectOptions[];
    channel_types?: ChannelTypes[];
}
export interface TextInputsComponent extends BaseComponent {
    custom_id: String;
    style: Number;
    label: String;
    min_length?: Number;
    max_length?: Number;
    required?: Boolean;
    value?: String;
    placeholder?: String;
}
export interface Emoji {
    id: String;
    name: String;
    roles?: Roles[];
    user?: User;
    require_colons?: Boolean;
    managed?: Boolean;
    animated?: Boolean;
    avaible?: Boolean;
}
export interface Roles {
    id: String;
    name: String;
    color: Number;
    hoist: Boolean;
    icon?: String;
    unicode_emoji?: String;
    position: Number;
    permissions: String;
    managed: Boolean;
    mentionable: Boolean;
    tags?: Tags;
}
export interface User {
    id: String;
    username: String;
    discriminator: String;
    avatar: String;
    bot?: Boolean;
    system?: Boolean;
    mfa_enabled?: Boolean;
    banner?: String;
    accent_color?: Number;
    locale?: String;
    verified?: String;
    email?: String;
    flags?: Number;
    premium_type?: Number;
    public_flags?: Number;
}
export interface SlashCommand {
    type?: ApplicationCommandTypes.CHAT_INPUT | ApplicationCommandTypes.USER | ApplicationCommandTypes.MESSAGE;
    guild_id?: String;
    name: String;
    name_localizations?: Object;
    description: String;
    description_localizations?: Object;
    options?: SlashCommandOptions[];
}
export interface SlashCommandOptions {
    type: ApplicationCommandOptionTypes.SUB_COMMAND | ApplicationCommandOptionTypes.SUB_COMMAND_GROUP | ApplicationCommandOptionTypes.STRING | ApplicationCommandOptionTypes.INTEGER | ApplicationCommandOptionTypes.BOOLEAN | ApplicationCommandOptionTypes.USER | ApplicationCommandOptionTypes.CHANNEL | ApplicationCommandOptionTypes.MENTIONABLE | ApplicationCommandOptionTypes.NUMBER | ApplicationCommandOptionTypes.ATTACHMENT;
    name: String;
    name_localizations?: Object;
    description: String;
    description_localizations?: Object;
    required?: Boolean | false;
    choices?: Choices[];
    options?: SlashCommandOptions[];
    channel_types?: ChannelTypes[];
    min_value?: Number;
    max_value?: Number;
    min_length?: Number;
    max_length?: Number;
    autocomplete?: Boolean | false;
}
interface EmbedFooter {
    text: String;
    icon_url?: String;
}
interface EmbedImage {
    url: String;
}
interface EmbedAuthor {
    name: String;
    url?: String;
    icon_url?: String;
}
interface EmbedFields {
    name: String;
    value: String;
    inline?: Boolean;
}
interface SelectOptions {
    label: String;
    value: String;
    description?: String;
    emoji: Emoji;
}
interface Tags {
    bot_id?: String;
    integration_id?: String;
    premium_subscriber?: null;
    subscription_listing_id?: String;
    available_for_purchase?: null;
    guild_connections?: null;
}
interface Data {
    options: {
        name: String;
        type: Number;
        value: String;
    }[];
    components: {
        components: {
            custom_id: String;
            type: Number;
            value: String;
        }[];
    }[];
}
interface Choices {
    name: String;
    name_localizations?: Object;
    value: String | Number;
}
export {};
