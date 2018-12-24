import Followers from '../common/followers';
import Image from '../common/image';
declare class PublicUser {
    displayName: string;
    externalUrls: any;
    followers?: Followers;
    href: string;
    id: string;
    images?: Image[];
    type: 'user';
    uri: string;
    constructor(json: any);
}
export default PublicUser;
