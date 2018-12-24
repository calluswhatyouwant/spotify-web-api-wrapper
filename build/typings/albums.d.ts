import { Album, TrackSimplified, Page } from './models';
export declare const getAlbum: (id: string, market?: string | undefined) => Promise<Album>;
export declare const getSeveralAlbums: (ids: string[], market?: string | undefined) => Promise<Album[]>;
export declare const getAlbumTracks: (id: string, offset?: number, limit?: number, market?: string | undefined) => Promise<Page<TrackSimplified>>;
