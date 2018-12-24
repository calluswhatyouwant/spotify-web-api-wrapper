declare class Page<T> {
    private t;
    href: string;
    items: T[];
    limit: number;
    private next;
    offset: number;
    private previous;
    total: number;
    wrapper?: string;
    constructor(json: any, t: new (json: any) => T, wrapper?: string);
    readonly queryParams: any;
    private getAxiosPageInstance;
    hasNext(): boolean;
    hasPrevious(): boolean;
    getNextPage(): Promise<Page<T>>;
    getPreviousPage(includeRepeated?: boolean): Promise<Page<T>>;
}
export default Page;
