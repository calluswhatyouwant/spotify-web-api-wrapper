import Context from './context';
import Track from '../track/track';
declare class CurrentlyPlaying {
    context: Context | null;
    currentlyPlayingType: string;
    isPlaying: boolean;
    item: Track | null;
    progressMs: number;
    timestamp: number;
    constructor(json: any);
}
export default CurrentlyPlaying;
