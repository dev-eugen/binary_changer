<template>
  <div id="app">
    <h2 class="m-1" style="margin-bottom: 20px">
      Конвертер перекладу систем числення онлайн
    </h2>
    <div class="d-grid gap-3">
      <h6 style="margin-bottom: -13px">Число:</h6>
      <b-form-input
        v-model="value"
        placeholder="Вихідні дані (десяткова система)"
      ></b-form-input>
      <h6 style="margin-bottom: -13px">Початковий система:</h6>
      <b-form-select
        placeholder="Підстава результату"
        v-model="source_system"
        :options="[
          {
            value: 10,
            text: 'Десятична',
          },
          {
            value: 16,
            text: 'Шістнадцятькова',
          },
          {
            value: 2,
            text: 'Двійкова',
          },
          {
            value: 8,
            text: 'Вісімкова',
          },
        ]"
      >
      </b-form-select>

      <h6 style="margin-bottom: -13px">Очікувана система:</h6>
      <b-form-select
        placeholder="Підстава результату"
        v-model="system"
        :options="[
          {
            value: 10,
            text: 'Десятична',
          },
          {
            value: 16,
            text: 'Шістнадцятькова',
          },
          {
            value: 2,
            text: 'Двійкова',
          },
          {
            value: 8,
            text: 'Вісімкова',
          },
        ]"
      >
      </b-form-select>
      <BButton
        :disabled="!value"
        @click="handle"
        class="w-100"
        variant="primary"
        >Показать</BButton
      >

      <BButton v-if="result" :disabled="true" class="w-100" variant="primary"
        >Відповідь: {{ result }}</BButton
      >
    </div>
  </div>
</template>

<script>
/*eslint-disable */
import { ref } from 'vue';
import logic from './logic.js';
export default {
  name: 'App',
  setup() {
    const value = ref(null);
    const system = ref(2);
    const source_system = ref(10);

    const result = ref(null);

    const base_convert = (number, initial_base, change_base) => {
      if (
        (initial_base && change_base) < 2 ||
        (initial_base && change_base) > 36
      )
        return 'Base between 2 and 36';

      return parseInt(number + '', initial_base).toString(change_base);
    };

    const handle = () => {
      result.value = logic(value.value, source_system.value, system.value);
    };

    return {
      value,
      system,
      handle,
      result,
      source_system,
    };
  },
};
</script>

<style>
#app {
  padding: 10px;
}

td {
  border: 1px solid black;
}
</style>
