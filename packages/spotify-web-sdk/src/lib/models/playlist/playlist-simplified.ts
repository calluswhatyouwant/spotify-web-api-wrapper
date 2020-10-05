import Image from '../common/image';
import PublicUser from '../user/user-public';

class PlaylistSimplified {
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

    constructor(json: any) {
        this.collaborative = json.collaborative;
        this.externalUrls = json.external_urls;
        this.href = json.href;
        this.id = json.id;
        this.images = json.images.map((imageJson: any) => new Image(imageJson));
        this.name = json.name;
        this.owner = new PublicUser(json.owner);
        this.public = json.public;
        this.snapshotId = json.snapshot_id;
        this.tracks = json.tracks;
        this.type = json.type;
        this.uri = json.uri;
    }

    get totalTracks() {
        return this.tracks.total;
    }
}

export default PlaylistSimplified;
