import Followers from '../common/followers';
import Image from '../common/image';
declare class Artist {
    externalUrls: any;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: 'artist';
    uri: string;
    constructor(json: any);
}
export default Artist;
