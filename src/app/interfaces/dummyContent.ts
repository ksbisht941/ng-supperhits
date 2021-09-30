export interface DummyContent {
    items: DummyContentItem[];
    totalResults: number;
    offset: number;
    size: number;
    nextOffsetURL: string;
    totalPageResults: number;
    totalPages: number;
}

export interface DummyContentItem {
    title: string;
    uri?: string;
    id: number;
    traySource: TraySource;
    layoutType?: LayoutType;
    addIdentifier: string;
    assets?: Assets;
    trayTypeId: number;
    traySourceId: number;
    uqId: string;
    globalId: string;
    recLayoutType?: string;
    platformGroupLayout?: PlatformGroupLayout;
}

export interface Assets {
    items: AssetsItem[];
    totalResults: number;
    offset: number;
    size: number;
    totalPageResults: number;
    totalPages: number;
    nextOffsetURL?: string;
}

export interface AssetsItem {
    title: string;
    contentId: number;
    uri: string;
    id: number;
    description: string;
    duration?: number;
    entityType: Type;
    contentType?: Type;
    contentProvider?: ContentProvider;
    cpDisplayName?: ContentProvider;
    cpLogoUrl?: string;
    assetType: Type;
    genre?: ChannelName[];
    lang: Lang[];
    premium?: boolean;
    live?: boolean;
    hboContent?: boolean;
    vip?: boolean;
    encrypted?: boolean;
    startDate?: number;
    endDate?: number;
    year?: number;
    line2?: string;
    line3?: string;
    playbackUri?: string;
    images: Images;
    imageSets: ImageSets;
    studioId?: number;
    studioName?: StudioName;
    contentDownloadable?: boolean;
    offlineStorageTime?: number;
    offlinePlaybackTime?: number;
    playbackType?: PlaybackType;
    monetisable?: boolean;
    langObjs?: LangObj[];
    genreObjs?: Obj[];
    languageSelector?: number;
    drmClass?: DRMClass;
    downloadDrmClass?: DRMClass;
    contentStartPointSeconds?: number;
    badges?: Badge[];
    labels?: Label[];
    clipType?: ClipType;
    trailers?: string[];
    parentalRating?: number;
    parentalRatingName?: ParentalRatingName;
    crisp?: string;
    isSocialEnabled: boolean;
    loginNudgeStatus: LoginNudgeStatus;
    orientation?: LayoutType;
    autoplayObjs?: AutoplayObj[];
    isSubTagged?: boolean;
    collections?: Collection[];
    categoryId?: number;
    channelName?: ChannelName;
    episodeCnt?: number;
    channelObj?: Obj;
    archived?: boolean;
    detail?: string;
    showCnt?: number;
    movieCnt?: number;
    clipCount?: number;
    pageType?: string;
    pageImageSets?: PageImageSets;
    animationTransitionInfo?: AnimationTransitionInfo;
}

export interface AnimationTransitionInfo {
    WEB: AnimationTransitionInfoLR;
    LR: AnimationTransitionInfoLR;
}

export interface AnimationTransitionInfoLR {
    publicUri: string;
    animationType: AnimationType;
}

export enum AnimationType {
    Mp4 = "MP4",
}

export enum Type {
    Channel = "CHANNEL",
    Movie = "MOVIE",
    Show = "SHOW",
}

export interface AutoplayObj {
    contentId: string;
    playbackType: PlaybackType;
    orientation: LayoutType;
}

export enum LayoutType {
    Horizontal = "HORIZONTAL",
    Masthead = "MASTHEAD",
    Vertical = "VERTICAL",
}

export enum PlaybackType {
    Internal = "INTERNAL",
}

export enum Badge {
    NP = "NP",
}

export enum ChannelName {
    Action = "Action",
    Adventure = "Adventure",
    AnimalsNature = "Animals & Nature",
    Animation = "Animation",
    Biopic = "Biopic",
    Comedy = "Comedy",
    ConcertFilm = "Concert Film",
    Crime = "Crime",
    Disney = "Disney",
    Documentary = "Documentary",
    Drama = "Drama",
    Family = "Family",
    Fantasy = "Fantasy",
    Historical = "Historical",
    Kids = "Kids",
    Marvel = "Marvel",
    Musical = "Musical",
    Mystery = "Mystery",
    NatGeo = "Nat Geo",
    Pixar = "Pixar",
    Reality = "Reality",
    Romance = "Romance",
    ScienceFiction = "Science Fiction",
    Shorts = "Shorts",
    StarWars = "Star Wars",
    Superhero = "Superhero",
    TalkShow = "Talk Show",
    Teen = "Teen",
    Wildlife = "Wildlife",
}

export interface Obj {
    id: number;
    name: ChannelName;
    detailUrl: string;
}

export enum ClipType {
    VOD = "VOD",
}

export interface Collection {
    name: Name;
}

export enum Name {
    Disney = "Disney+",
}

export enum ContentProvider {
    Hotstar = "Hotstar",
    Novi = "Novi",
    NoviDigital = "Novi Digital",
    RobertWiseProductions = "Robert Wise Productions",
    TwentiethCenturyFOXFilmCorporation = "Twentieth century FOX film Corporation",
    WaltDisneyPictures = "Walt Disney Pictures",
}

export enum DRMClass {
    BestEffort = "BEST_EFFORT",
    NoCompromise = "NO_COMPROMISE",
}

export interface ImageSets {
    DEFAULT: Images;
}

export interface Images {
    v: string;
    h: string;
    a?: string;
    s?: string;
    m?: string;
    t?: string;
    i?: string;
}

export enum Label {
    Vip = "VIP",
}

export enum Lang {
    Bengali = "Bengali",
    English = "English",
    Hindi = "Hindi",
    Japanese = "Japanese",
    Kannada = "Kannada",
    Malayalam = "Malayalam",
    Na = "NA",
    Tamil = "Tamil",
    Telugu = "Telugu",
}

export interface LangObj {
    hide: boolean;
    id: number;
    name: Lang;
    iso3code: Iso3Code;
    detailUrl: string;
    displayName: DisplayName;
}

export enum DisplayName {
    English = "English",
    Japanese = "Japanese",
    हिंदी = "हिंदी",
    বাংলা = "বাংলা",
    தமிழ் = "தமிழ்",
    తెలుగు = "తెలుగు",
    ಕನ್ನಡ = "ಕನ್ನಡ",
    മലയാളം = "മലയാളം",
}

export enum Iso3Code {
    Ben = "ben",
    Eng = "eng",
    Hin = "hin",
    Jpn = "jpn",
    Kan = "kan",
    Mal = "mal",
    Tam = "tam",
    Tel = "tel",
}

export enum LoginNudgeStatus {
    Default = "DEFAULT",
}

export interface PageImageSets {
    DEFAULT: Default;
}

export interface Default {
    s: string;
    v: string;
    h: string;
    m: string;
    a?: string;
}

export enum ParentalRatingName {
    U = "U",
    UA13 = "U/A 13+",
    UA16 = "U/A 16+",
    UA7 = "U/A 7+",
}

export enum StudioName {
    Disney = "Disney",
    Fox = "FOX",
    LucasFilm = "LucasFilm",
    Marvel = "Marvel",
    NatGeo = "Nat Geo",
    Pixar = "Pixar",
}

export interface PlatformGroupLayout {
    WEB: MOBILEClass;
    LR: MOBILEClass;
    TABLET: MOBILEClass;
    MOBILE: MOBILEClass;
}

export interface MOBILEClass {
    imageType: string;
    fillWidth: string;
    itemsPerRow: number;
    displayTitle: boolean;
}

export enum TraySource {
    Catalog = "CATALOG",
    Gravity = "GRAVITY",
}
