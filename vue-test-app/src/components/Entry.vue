<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/solid';
import { EyeIcon } from '@heroicons/vue/24/solid';
import { EyeSlashIcon } from '@heroicons/vue/24/solid';

import type {IAccountItem} from "../stores/types";
import {useAccountStore} from "../stores";

const myStore = useAccountStore();
myStore.init();

const props = defineProps<IAccountItem>();
</script>

<template>
    <div class="form__row flex flex-row gap-x-4 py-3 items-center">
      <input type="text"
             name="mark"
             :placeholder="props.entry.mark"
             :value="props.entry.mark"
             readonly
             class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-3/12"
      />

      <select name="localType"
              class="border border-gray-300 bg-white text-gray-900 block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-3/12">
        <option value="!props.entry.localType" disabled>LDAP</option>
        <option value="props.entry.localType" selected>Локальная</option>
      </select>

      <input type="text"
             :placeholder="props.entry.login"
             :value="props.entry.login"
             readonly
             class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-3/12"
      />

      <input v-if="props.entry.password"
             id="toggle-password"
             type="password"
             :placeholder="props.entry.password"
             :value="props.entry.password"
             readonly
             class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-3/12"
      />
      <button type="button"
              entry-toggle-password='{ "target": "#toggle-password" }'
              class="cursor-pointer"
              aria-label="password toggle" >
        <EyeSlashIcon class="size-4 password-active:hidden block"/>
        <EyeIcon class="size-4 password-active:block hidden" />
      </button>

      <button type="button"
              class="cursor-pointer flex items-center w-1/12 py-3 px-4 hover:bg-blue-400 focus:ring-4 focus:ring-blue-400 rounded-md text-center"
      >
        <TrashIcon class="size-6" />
      </button>
    </div>
</template>

