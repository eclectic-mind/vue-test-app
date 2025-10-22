import { defineStore } from "pinia";

export const useAccountStore = defineStore('Account', {
    state: () => ({
        count: 0,
        pages: 0,
        prev: null,
        next: null,
        currentPage: 1,
        items: []
    }),

    actions: {
        init() {
            // this.fetchData();
        },
    },
});
