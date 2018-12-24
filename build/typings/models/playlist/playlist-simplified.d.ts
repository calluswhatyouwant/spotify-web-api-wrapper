import Image from '../common/image';
import PublicUser from '../user/user-public';
declare class PlaylistSimplified {
    collaborative: boolean;
    externalUrls: any;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: PublicUser;
    public: boolean | null;
    snapshotId: string;
    tracks: any;
    type: 'playlist';
    uri: string;
    constructor(json: any);
    readonly totalTracks: any;
}
export default PlaylistSimplified;
