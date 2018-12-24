declare class CursorBasedPage<T> {
    private t;
    href: string;
    items: T[];
    limit: number;
    next: string;
    cursors: any;
    total: number;
    constructor(json: any, t: new (json: any) => T);
    readonly queryParams: any;
    private getAxiosPageInstance;
    hasNext(): boolean;
    getNextPage(): Promise<CursorBasedPage<T>>;
}
export default CursorBasedPage;
