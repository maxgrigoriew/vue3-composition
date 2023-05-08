<template>
  <tr class="p-2">
    <td class="table-striped">
      {{ post.id }}
    </td>
    <td class="table-striped">
      {{ post.title }}
    </td>
    <td class="table-secondary">
      {{ post.body }}
    </td>
    <td class="table-secondary text-right">
      <is-button
        class="btn-danger"
        @click="remove(post)"
      >
        Удалить
      </is-button>
    </td>
  </tr>

</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  name: "isPost",
  components: {},
  props: ['post'],
  methods: {
    remove(post) {
      this.$emit('remove', post)
    }
  }
})
</script>

<style scoped>
.text-right {
  text-align: right;
}
</style>