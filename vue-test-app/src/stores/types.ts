export interface IAccountItem {
    mark: { text: string }[],
    localType: boolean,
    login: string,
    password: string | null
}

export interface IEntryItem {
    entry: IAccountItem
}