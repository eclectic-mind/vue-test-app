<script setup lang="ts">
import {TrashIcon} from "@heroicons/vue/24/solid";
import {useAccountStore} from '../stores/';
import {reactive} from 'vue';
import type {IAccountItem} from "../stores/types.ts";

const myStore = useAccountStore();

const state = reactive({
  isLocal: true
});

const form = reactive({
  mark: '',
  login: '',
  password: '',
  localType: ''
});

const onChange = (event: Event): void => {
  const target = event.target as HTMLInputElement;

  if (target?.value === 'ldap') {
    state.isLocal = false;
  } else {
    state.isLocal = true;
  }
}

const formatMark = (marks: string): { text: string }[] => {
  const result: { text: string }[] = [];
  const array: string[] = marks.split(';');

  array.forEach((item: string) => {
    result.push({
      text: item.trim()
    });
  });

  return result;
};

const addEntry = (entry: IAccountItem): void => {
  myStore.addItem(entry);
};

const submit = (): void => {
  const markData = formatMark(form.mark);

  const data: IAccountItem = {
    mark: markData,
    localType: form.localType,
    login: form.login,
    password: form.password
  }

  addEntry(data);
};
</script>

<template>
  <form @submit.prevent="submit">
    <div class="form__row flex flex-row justify-between gap-x-4 py-3 items-center">
      <div class="w-3/13 min-w-3/13">
        <input v-model="form.mark"
               type="text"
               name="mark"
               placeholder="Введите метки"
               class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="w-3/13 min-w-3/13">
        <select v-model="form.localType"
                @change="onChange($event)"
                name="localType"
                required
                class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full">
          <option value="" selected class="invisible"></option>
          <option value="ldap">
            LDAP
          </option>
          <option value="local">
            Локальная
          </option>
        </select>
      </div>

      <div class="w-full min-w-3/13">
        <input v-model="form.login"
               type="text"
               name="login"
               placeholder="Введите логин"
               required
               class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div v-if="state.isLocal" class="w-3/13 min-w-3/13">
        <input v-model="form.password"
               type="text"
               name="password"
               placeholder="Введите пароль"
               class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="text-right">
        <TrashIcon class="size-6 invisible cursor-not-allowed pointer-events-none" />
        <button type="submit">Submit</button>
      </div>
    </div>
  </form>
</template>

