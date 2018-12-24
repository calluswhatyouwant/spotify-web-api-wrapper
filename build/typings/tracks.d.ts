import { Track, AudioAnalysis, AudioFeatures } from './models';
export declare const getSeveralTracks: (ids: string[], params?: {
    market?: string | undefined;
} | undefined) => Promise<any>;
export declare const getTrack: (id: string, params?: {
    market?: string | undefined;
} | undefined) => Promise<Track>;
export declare const getAudioAnalysisForTrack: (id: string) => Promise<AudioAnalysis>;
export declare const getAudioFeaturesForTrack: (id: string) => Promise<AudioFeatures>;
export declare const getAudioFeaturesForSeveralTracks: (ids: string[]) => Promise<any>;
