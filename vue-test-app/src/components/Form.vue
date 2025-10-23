<script setup lang="ts">
import {useAccountStore} from '../stores/';
import {reactive} from 'vue';
import type {IAccountItem} from "../stores/types.ts";

const myStore = useAccountStore();

const state = reactive({
  isLocal: true
});

const initialValues = {
  mark: '',
  login: '',
  password: '',
  localType: ''
};

const form = reactive({ ...initialValues });

const reset = (): void => {
  Object.assign(form, initialValues);
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
  if (!form.login || !form.localType) {
    return;
  }

  const markData = formatMark(form.mark);

  const data: IAccountItem = {
    mark: markData,
    localType: form.localType,
    login: form.login,
    password: form.password
  }

  addEntry(data);
  reset();
};

const onChange = (event: Event): void => {
  const target = event.target as HTMLInputElement;

  state.isLocal = target?.value !== 'ldap';

  submit();
};
</script>

<template>
  <form @submit.prevent="submit">
    <div class="form__row flex flex-row justify-between gap-x-4 py-3 items-center">
      <div class="w-3/13 min-w-3/13">
        <input v-model="form.mark"
               @blur="submit()"
               :maxlength="50"
               type="text"
               name="mark"
               placeholder="Введите метки"
               class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 appearance-none block
               rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="w-3/13 min-w-3/13">
        <select v-model="form.localType"
                @change="onChange($event)"
                name="localType"
                class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 block rounded-md py-3
                px-4 focus:border-blue-500 focus:outline-none w-full"
        >
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
               @blur="submit()"
               :maxlength="100"
               type="text"
               name="login"
               placeholder="Введите логин"
               required
               class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 appearance-none block
               rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div v-if="state.isLocal" class="w-3/13 min-w-3/13">
        <input v-model="form.password"
               @blur="submit()"
               :maxlength="100"
               :required="state.isLocal"
               type="text"
               name="password"
               placeholder="Введите пароль"
               class="invalid:border-red-500 border border-gray-300 bg-white text-gray-900 appearance-none block
               rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="text-right">
        <div class="size-6 invisible"></div>
      </div>
    </div>
  </form>
</template>

