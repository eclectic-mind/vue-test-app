<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/solid';
// import { EyeIcon } from '@heroicons/vue/24/solid';
// import { EyeSlashIcon } from '@heroicons/vue/24/solid';

import type {IEntryItem} from "../stores/types";
import {useAccountStore} from "../stores";

const myStore = useAccountStore();
const props = defineProps<IEntryItem>();

const removeEntry = (): void => {
    myStore.removeItem(props.entry);
};
</script>

<template>
    <div class="form__row flex flex-row justify-between gap-x-4 py-3 items-center">
      <div class="w-3/13 min-w-3/13">
        <input type="text"
               name="mark"
               :placeholder="props.entry.mark.join('; ')"
               :value="props.entry.mark.join('; ')"
               readonly
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="w-3/13 min-w-3/13">
        <select name="localType"
                class="border border-gray-300 bg-white text-gray-900 block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full">
          <option value="!props.entry.localType"
                  :disabled="props.entry.localType"
                  :selected="!props.entry.localType">
            LDAP
          </option>
          <option value="props.entry.localType"
                  :disabled="!props.entry.localType"
                  :selected="props.entry.localType">
            Локальная
          </option>
        </select>
      </div>

      <div class="w-full min-w-3/13">
        <input type="text"
               name="login"
               :placeholder="props.entry.login"
               :value="props.entry.login"
               readonly
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div v-if="props.entry.password" class="w-3/13 min-w-3/13">
        <input type="password"
               name="password"
               :placeholder="props.entry.password"
               :value="props.entry.password"
               readonly
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
        <!-- <button type="button"
                entry-toggle-password='{ "target": "#toggle-password" }'
                class="cursor-pointer"
                aria-label="password toggle" >
          <EyeSlashIcon class="size-4 password-active:hidden block"/>
          <EyeIcon class="size-4 password-active:block hidden" />
        </button> -->
      </div>

      <div class="text-right">
        <button type="button"
                class="cursor-pointer flex items-center py-3  rounded-md text-center"
                @click="removeEntry()"
        >
          <TrashIcon class="size-6" />
        </button>
      </div>
    </div>
</template>

