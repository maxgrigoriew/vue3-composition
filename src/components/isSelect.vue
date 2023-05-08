<template>
  <select
    :value="valueSelect"
    @change="$emit('update:modelValue', $event.target.value)"
    class="form-select"
    aria-label="Default select example"
  >
    <option
      disabled
      value=""
    >Выберите сортировку</option>
    <option
      v-for="item in options"
      :key="item"
      :value="item.value"
    >
      {{ item.name }}
    </option>
  </select>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "isSelect1",
  props: ['options', 'valueSelect'],
  emits: ['valueSelect'],
  setup(props, { emit }) {
    const updateSelect = (e) => {
      emit('update:modelValue', e.target.value)
    }
    return {
      updateSelect,
    }
  }
})
</script>