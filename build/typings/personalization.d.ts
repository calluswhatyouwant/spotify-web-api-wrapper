import { Artist, Page, Track } from './models';
export declare const getCurrentUserTopArtists: (params?: {
    limit?: number | undefined;
    offset?: number | undefined;
    range?: string | undefined;
} | undefined) => Promise<Page<Artist>>;
export declare const getCurrentUserTopTracks: (params?: {
    limit?: number | undefined;
    offset?: number | undefined;
    range?: string | undefined;
} | undefined) => Promise<Page<Track>>;
