export interface IAccountItem {
    entry: {
        mark: string,
        localType: boolean,
        login: string,
        password: string | null
    }
}