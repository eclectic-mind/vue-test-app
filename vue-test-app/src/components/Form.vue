<script setup lang="ts">
import {TrashIcon} from "@heroicons/vue/24/solid";
</script>

<template>
    <div class="form__row flex flex-row justify-between gap-x-4 py-3 items-center">
      <div class="w-3/13 min-w-3/13">
        <input type="text"
               name="mark"
               placeholder="Введите метки"
               value=""
               required
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="w-3/13 min-w-3/13">
        <select name="localType"
                class="border border-gray-300 bg-white text-gray-900 block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full">
          <option value="!props.entry.localType">
            LDAP
          </option>
          <option value="props.entry.localType">
            Локальная
          </option>
        </select>
      </div>

      <div class="w-full min-w-3/13">
        <input type="text"
               name="login"
               placeholder=""
               value="Введите логин"
               required
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="w-3/13 min-w-3/13">
        <input type="text"
               name="password"
               placeholder="Введите пароль"
               value=""
               class="border border-gray-300 bg-white text-gray-900 appearance-none block rounded-md py-3 px-4 focus:border-blue-500 focus:outline-none w-full"
        />
      </div>

      <div class="text-right">
        <TrashIcon class="size-6 invisible cursor-not-allowed pointer-events-none" />
      </div>
    </div>
</template>

