import Followers from '../common/followers';
import Image from '../common/image';
import Page from '../paging/page';
import PlaylistTrack from './playlist-track';
import PublicUser from '../user/user-public';
declare class Playlist {
    collaborative: boolean;
    description: boolean;
    externalUrls: any;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: PublicUser;
    public: boolean | null;
    snapshotId: string;
    tracks: Page<PlaylistTrack>;
    type: 'playlist';
    uri: string;
    constructor(json: any);
}
export default Playlist;
