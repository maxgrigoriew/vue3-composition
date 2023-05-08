<template>
   <button class="btn btn-success"
           :class="className"
           @click="$emit('click')">
      <slot>
         {{ text }}
      </slot>
   </button>
</template>

<script>
export default {
   props: {
      text: {
         type: String,
         default: 'Кнопка'
      },
      danger: {
         type: String
      }
   },
   computed: {
      className() {
         return {
            'btn-danger': this.danger
         }
      }
   }
}
</script>

<style scoped>

</style>

