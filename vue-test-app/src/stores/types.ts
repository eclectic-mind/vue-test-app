export interface IAccountItem {
    mark: { text: string }[],
    localType: string,
    login: string,
    password: string | null
}

export interface IEntryItem {
    entry: IAccountItem
}