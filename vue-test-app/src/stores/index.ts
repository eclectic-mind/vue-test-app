import { defineStore } from "pinia";
import type {IAccountItem} from "./types.ts";

export const useAccountStore = defineStore('Account', {
    state: () => ({
        entries: [
            {
                mark: [
                    {
                        text: 'XXXX'
                    }
                ],
                localType: 'local',
                login: 'jane',
                password: '86kjfjgkdfgkjfkh'
            },
            {
                mark: [
                    {
                        text: 'YYYYYYYYYYYYYYYy'
                    },
                    {
                        text: 'GGG'
                    },
                    {
                        text: 'MMMMMMMMM'
                    },
                ],
                localType: 'ldap',
                login: 'peter',
                password: null
            },
            {
                mark: [
                    {
                        text: 'LLLLLLLLLL'
                    }
                ],
                localType: 'local',
                login: 'frank',
                password: '946785486046748646'
            }
        ]
    }),

    persist: true,

    actions: {
        addItem(item: IAccountItem): void {
            this.entries.push(item);
        },

        removeItem(item: IAccountItem): void {
            this.entries.splice(this.entries.indexOf(item), 1);
        },
    }
});
