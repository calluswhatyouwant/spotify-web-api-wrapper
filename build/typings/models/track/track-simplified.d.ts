import ArtistSimplified from '../artist/artist-simplified';
declare class TrackSimplified {
    artists: ArtistSimplified[];
    availableMarkets: string[];
    discNumber: number;
    durationMs: number;
    explicit: boolean;
    externalUrls: any;
    href: string;
    id: string;
    isPlayable: boolean;
    linkedFrom: any;
    restrictions: any;
    name: string;
    previewUrl: string;
    trackNumber: number;
    type: 'track';
    uri: string;
    isLocal: boolean;
    constructor(json: any);
    readonly stringArtists: string;
    readonly length: string;
}
export default TrackSimplified;
