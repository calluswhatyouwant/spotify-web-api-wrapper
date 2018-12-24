import { PlayHistory, CursorBasedPage, CurrentlyPlaying } from './models';
export declare const getCurrentUserRecentlyPlayedTracks: (params?: {
    limit?: number | undefined;
    before?: string | undefined;
    after?: string | undefined;
} | undefined) => Promise<CursorBasedPage<PlayHistory>>;
export declare const getCurrentUserCurrentlyPlayingTrack: (params?: {
    market?: string | undefined;
} | undefined) => Promise<CurrentlyPlaying>;
