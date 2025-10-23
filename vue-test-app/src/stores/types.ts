export interface IAccountItem {
    mark: string[],
    localType: boolean,
    login: string,
    password: string | null
}

export interface IEntryItem {
    entry: IAccountItem
}