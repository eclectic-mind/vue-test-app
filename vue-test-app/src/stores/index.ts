import { defineStore } from "pinia";

export const useAccountStore = defineStore('Account', {
    state: () => ({
        entries: [
            {
                mark: ['XXX'],
                localType: true,
                login: 'jane',
                password: '86kjfjgkdfgkjfkh'
            },
            {
                mark: ['XXX', 'YYYYYYYYY', 'IIIIII', 'MMMMMMMMMM'],
                localType: false,
                login: 'peter',
                password: null
            },
            {
                mark: ['MMMMMMMMMM'],
                localType: false,
                login: 'douglas',
                password: null
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
