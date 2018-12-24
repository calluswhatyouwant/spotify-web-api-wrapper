import Followers from '../common/followers';
import Image from '../common/image';
declare class PrivateUser {
    birthdate: string;
    country: string;
    displayName: string;
    email: string;
    externalUrls: any;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    product: string;
    type: 'user';
    uri: string;
    constructor(json: any);
}
export default PrivateUser;
