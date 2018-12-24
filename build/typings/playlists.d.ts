import { Playlist, PlaylistTrack, PlaylistSimplified, Page } from './models';
export declare const getPlaylist: (id: string) => Promise<Playlist>;
export declare const getPlaylistTracks: (id: string, offset?: number, limit?: number) => Promise<Page<PlaylistTrack>>;
export declare const getUserPlaylists: (id: string, offset?: number, limit?: number) => Promise<Page<PlaylistSimplified>>;
