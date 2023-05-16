<template>
  <button
    class="btn btn-success"
    :class="className"
    @click="$emit('click')"
  >
    <slot>
      {{ text }}
    </slot>
  </button>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
   text: {
      type: String,
      default: 'button'
   },
   danger: {
      type: String,
   }
})
const className = computed(() => {
  return {
    'btn-danger': props.danger
  }
})
</script>

<style scoped>
</style>

