<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/24/solid';
import { EyeIcon } from '@heroicons/vue/24/solid';
import { EyeSlashIcon } from '@heroicons/vue/24/solid';
import type {IEntryItem, Preline} from "../stores/types";
import {useAccountStore} from "../stores";
import('@preline/toggle-password').then(() => {
  (window as unknown as { HSStaticMethods: Preline['HSStaticMethods'] }).HSStaticMethods.autoInit();
});

const myStore = useAccountStore();
const props = defineProps<IEntryItem>();

const removeEntry = (): void => {
    myStore.removeItem(props.entry);
};

const stringifyMark = (array: { text: string }[]): string => {
  const result: string[] = [];

  array.forEach((obj: {text: string}) => {
    result.push(obj.text);
  });

  return result.join('; ');
};
</script>

<template>
    <div class="form__row flex flex-row justify-between gap-x-4 py-3 items-center">
      <div class="w-3/13 min-w-3/13">
        <input type="text"
               name="mark"
               :placeholder="stringifyMark(props.entry.mark)"
               :value="stringifyMark(props.entry.mark)"
               readonly
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="w-3/13 min-w-3/13">
        <select name="localType"
                class="border border-gray-300 bg-white text-gray-900 block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full">
          <option value="!props.entry.localType"
                  :selected="props.entry.localType === 'ldap'">
            LDAP
          </option>
          <option value="props.entry.localType"
                  :selected="props.entry.localType === 'local'">
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

      <div v-if="props.entry.password" class="relative w-3/13 min-w-3/13">
        <input type="password"
               name="password"
               id="hs-toggle-password"
               :placeholder="props.entry.password"
               :value="props.entry.password"
               readonly
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
        <button type="button"
                data-hs-toggle-password='{"target": "#hs-toggle-password"}'
                class="btn absolute inset-y-0 end-0 flex items-center z-20 px-3 cursor-pointer"
                aria-label="password toggle" >
          <EyeSlashIcon class="icon-closed size-4 hs-password-active:hidden"/>
          <EyeIcon class="icon-opened size-4 hidden hs-password-active:block" />
        </button>
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

