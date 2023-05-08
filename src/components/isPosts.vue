<template>
   <table v-if="posts.length"
          class="pt-4 w-100">
      <tr class="table-warning card-title mt-4">
         <th>{{id}}</th>
         <th>{{title}}</th>
         <th>{{description}}</th>
         <th class="text-right">{{action}}</th>
      </tr>
      <is-post v-for="post in posts"
               :key="post.id"
               :post="post"
               @remove="remove"/>
   </table>
   <div v-else
        class="card bg-danger card-title p-2 text-bg-dark mt-4"> Постов нет
   </div>
</template>

<script>
import isPost from "@/components/isPost";

export default {
   name: "isPosts",
   data() {
      return {
         id: this.postsProps.tableHeader.id,
         title: this.postsProps.tableHeader.title,
         description: this.postsProps.tableHeader.action,
         action: this.postsProps.tableHeader.action,
      }
   },
   props: {
      postsProps: {
         type: Object
      },
      posts: {
         type: Object,
         
      }
   },
   components: {
      isPost
   },
   methods: {
      remove(post) {
         this.$emit('remove', post)
      }
   }
}
</script>

<style scoped>
.text-right {
   text-align: right;
}
</style>