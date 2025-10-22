<script setup lang="ts">
import Entry from './components/Entry.vue';
import {QuestionMarkCircleIcon} from "@heroicons/vue/24/solid";

// import type {IAccountItem} from "~/stores/types";
import {useAccountStore} from './stores/';

const myStore = useAccountStore();
myStore.init();
</script>

<template>
  <div class="container mx-auto m-8 px-20 box-border w-full">
    <div class="form__title flex flex-row gap-x-4 py-3 items-center">
      <h3>Учетные записи</h3>

      <button type="button"
              class="cursor-pointer flex items-center py-3 px-5 border border-gray-300 bg-white hover:bg-blue-400 focus:ring-4 focus:ring-blue-400 rounded-md text-center text-lg">
        +
      </button>
    </div>

    <div class="form__warning flex flex-row gap-x-3 bg-gray-300 py-3 px-3 mb-4 mt-2">
      <QuestionMarkCircleIcon class="size-6" />
      Для&nbsp;указания нескольких меток для&nbsp;одной пары логин/пароль используйте разделитель ;
    </div>

    <div class="form__wrapper">
      <div class="form__header">
        <div class="form__row flex flex-row gap-x-4 text-gray-400">
          <div class="form__cell py-3 w-3/12">Метки</div>
          <div class="form__cell py-3 w-3/12">Тип записи</div>
          <div class="form__cell py-3 w-3/12">Логин</div>
          <div class="form__cell py-3 w-3/12">Пароль</div>
          <div class="w-1/12"></div>
        </div>
      </div>

      <div class="form__body">
        <Entry />
      </div>
    </div>
  </div>
</template>
