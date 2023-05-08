<template>
   <select :value="valueSelect"
           @change="$emit('update:valueSelect', $event.target.value)"
           class="form-select"
           aria-label="Default select example">
      <option disabled value="">Выберите сортировку</option>
      <option v-for="item in options"
              :key="item"
              :value="item.value"
      >
         {{ item.name }}
      </option>
   </select>
</template>

<script>
export default {
   name: "isSelect",
   props: ['options', 'valueSelect'],
   emits: ['valueSelect'],
   methods: {
      // updateSelect(e) {
      //    this.$emit('update:valueSelect', e.target.value)
      // }
   }
}
</script>

<style scoped>

</style>