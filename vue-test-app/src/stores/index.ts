import { defineStore } from "pinia";

export const useAccountStore = defineStore('Account', {
    state: () => ({
        entries: [
            {
                mark: [
                    {
                        text: 'XXXX'
                    }
                ],
                localType: true,
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
                localType: false,
                login: 'peter',
                password: null
            },
            {
                mark: [
                    {
                        text: 'LLLLLLLLLL'
                    }
                ],
                localType: false,
                login: 'frank',
                password: '946785486046748646'
            }
        ]
    }),

    persist: true,

    actions: {
        addItem(item: any): void {
            console.log('add', item);
            this.entries.push(item);
        },

        removeItem(item: any): void {
            console.log('remove', item);
            this.entries.splice(this.entries.indexOf(item), 1);
        },
    }
});
