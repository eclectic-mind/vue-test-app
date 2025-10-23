import { defineStore } from "pinia";
import type {IAccountItem} from "./types.ts";

export const useAccountStore = defineStore('Account', {
    state: () => ({
        entries: [] as IAccountItem[]
    }),

    persist: {
        storage: localStorage
    },

    actions: {
        addItem(item: IAccountItem): void {
            this.entries.push(item);
        },

        removeItem(item: IAccountItem): void {
            this.entries.splice(this.entries.indexOf(item), 1);
        },
    }
});
