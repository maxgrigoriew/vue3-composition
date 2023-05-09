<template>
  <transition>
    <div
      v-show="modal"
      @click="close"
      class="dialog"
    >
      <div
        @click.stop
        class="dialog__inner"
      >
        <div class="d-flex justify-content-end mb-1">
          <is-button
            @click='close'
            class="btn ml-auto"
          >x</is-button>
        </div>

        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const modal = ref(false)

    const open = () => {
      console.log('open')
      modal.value = true
    }

    const close = () => {
      console.log('close')
      modal.value = false
    }

    return {
      open,
      close,
      modal,
    }
  }


})




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