<template>
   <div class="form"
        @submit.prevent>
      <label class="form-label">Введите название поста</label>
      <is-input
         v-model="post.title"/>
      <label class="form-label">Введите описание поста</label>
      <is-input
          v-model.modalValue="post.body"/>
   </div>
   <div>
      <is-button class="ml-auto"
                 @click="addPost"
                 :text="'Добавить'"/>
   </div>

</template>

<script>
export default {
   props: {
      posts: {
         type: Array,
      }
   },
   data() {
      return {
         post: {
            id: '',
            title: '',
            body: ''
         }
      }
   },
   methods: {
      addPost() {
         if(this.post.title !== '' && this.post.body !== '') {
            this.post.id = this.postsLength + 1
            this.$emit('addPost', this.post)
            this.post = {
               title: '',
               body: ''
            }
         }
      },
   },
   computed: {
      postsLength() {
         return this.posts.length
      }
   },
   mounted() {
   
   }
}
</script>

<style scoped>

</style>