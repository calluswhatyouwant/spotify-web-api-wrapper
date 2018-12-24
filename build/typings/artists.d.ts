import { Artist, Track, Page, AlbumSimplified } from './models';
export declare const getArtist: (id: string) => Promise<Artist>;
export declare const getSeveralArtists: (ids: string[]) => Promise<Artist[]>;
export declare const getArtistAlbums: (id: string, offset?: number, limit?: number, includeGroups?: string[] | undefined, market?: string | undefined) => Promise<Page<AlbumSimplified>>;
export declare const getArtistRelatedArtists: (id: string) => Promise<Artist[]>;
export declare const getArtistTopTracks: (id: string, market: string) => Promise<Track[]>;
