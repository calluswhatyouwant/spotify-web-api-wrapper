import Context from './context';
import Track from '../track/track';
declare class PlayHistory {
    track: Track;
    playedAt: string;
    context: Context | null;
    constructor(json: any);
}
export default PlayHistory;
