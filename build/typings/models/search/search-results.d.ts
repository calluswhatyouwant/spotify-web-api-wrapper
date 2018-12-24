import Page from '../paging/page';
import AlbumSimplified from '../album/album-simplified';
import Artist from '../artist/artist';
import PlaylistSimplified from '../playlist/playlist-simplified';
import Track from '../track/track';
declare class SearchResults {
    albums?: Page<AlbumSimplified>;
    artists?: Page<Artist>;
    playlists?: Page<PlaylistSimplified>;
    tracks?: Page<Track>;
    constructor(json: any);
}
export default SearchResults;
