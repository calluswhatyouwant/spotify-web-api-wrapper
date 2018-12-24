import RecommendationSeed from './recommendation-seed';
import TrackSimplified from '../track/track-simplified';
declare class Recommendations {
    seeds: RecommendationSeed[];
    tracks: TrackSimplified[];
    constructor(json: any);
}
export default Recommendations;
