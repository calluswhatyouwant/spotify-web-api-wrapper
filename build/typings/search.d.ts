import { AlbumSimplified, Artist, Page, PlaylistSimplified, Track, SearchResults } from './models';
export declare const search: (query: string, type: string, options?: {
    market?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
} | undefined) => Promise<SearchResults>;
export declare const searchAlbums: (query: string, options?: {
    market?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
} | undefined) => Promise<Page<AlbumSimplified>>;
export declare const searchArtists: (query: string, options?: {
    market?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
} | undefined) => Promise<Page<Artist>>;
export declare const searchPlaylists: (query: string, options?: {
    market?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
} | undefined) => Promise<Page<PlaylistSimplified>>;
export declare const searchTracks: (query: string, options?: {
    market?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
} | undefined) => Promise<Page<Track>>;
