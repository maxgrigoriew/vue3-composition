<template>
  <transition>
    <div
      v-show="visibleModal"
      @click="hideDialog"
      class="dialog"
    >
      <div
        @click.stop
        class="dialog__inner"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps(['visibleModal'])

const emits = defineEmits(['isModal'])

const hideDialog = () => {
  emits('closeModal')
}

</script>

<style lang="scss" scoped>
.dialog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  &__inner {
    max-width: 600px;
    width: 100%;
    padding: 1rem;
    background: #fff;
    border-radius: 10px;
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>