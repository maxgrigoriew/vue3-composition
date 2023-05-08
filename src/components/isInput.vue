<template>
   <div class="input-group input-group mb-3">
      <input
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          type="text"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm">
   </div>
</template>

<script>
export default {
   name: "isInput",
   emits: ['modelValue'],
   props: {
      modelValue: {
         type: String, Number
      }
   },
   methods: {
      updateInput(e) {
         this.$emit("update:modelValue", e.target.value)
      }
   }
}
</script>

<style scoped>

</style>