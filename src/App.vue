<template>
  <div class="container pt-3">
    <h2
      ref="h2"
      class="mb-3 text-right"
    >Страница постов</h2>
    <div class="d-flex justify-content-between">

      <is-button @click="openModal" class="align-items-center">
        Добавить пост
      </is-button>

      <is-input
        style="width: 300px"
        v-model="searchInput"
        :placeholder="searchInput"
      />

      <is-select
        v-model:valueSelect="selectedSort"
        :options="options"
        style="width: 300px"
      />
    </div>
    <is-posts
      :postsProps="postsProps"
      :posts="filtredList"
      @remove="removePost"
    />

    <is-dialog v-model:modal="visibleModal">

      <is-form
        :posts="posts"
        @addPost="addPost"
      >
      </is-form>
    </is-dialog>
    <div class="d-flex justify-content-center pt-3">
      <is-pagination
        :totalPages="totalPages"
        v-model:currentPage="page"
        @changePage="changePage"
      />
    </div>
    <is-loader ref="loader" />
  </div>
</template>
<script>

import IsForm from "@/components/isForm";
import IsPosts from "@/components/isPosts";
import IsDialog from "@/components/isDialog";
import IsSelect from "@/components/isSelect";
import testMixin from "@/mixins/testMixin";
import consoleMixin from "@/mixins/consoleMixin";
import axios from 'axios'
import IsPagination from "@/components/isPagination";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mixins: [testMixin, consoleMixin],
  components: { IsPagination, IsSelect, IsDialog, IsPosts, IsForm },
  data() {
    return {
      names: [{ name: 'max' }],
      posts: [
        {
          id: 1,
          title: 'title',
          body: 'body'
        },
      ],
      tableHeader: {
        id: 'id',
        title: 'Название',
        description: 'Описание',
        action: 'Действие'
      },
      visibleModal: false,
      options: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
      ],
      selectedSort: '',
      searchInput: '',
      page: 1,
      sizePage: 10,
      totalPages: 0
    }
  },
  methods: {
    changePost() {
      console.log(this.posts[0].id)
      this.posts[0].id = 'bla bla'
    },
    addPost(post) {
      this.posts.push(post)
      this.visibleModal = false
    },
    removePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id)
    },
    async fetchPosts() {
      try {
        this.$refs.loader.open()
        let data = await axios.get('http://jsonplaceholder.typicode.com/posts/', {
          params: {
            _limit: this.sizePage,
            _page: this.page
          }
        })
        this.totalPages = +(data.headers['x-total-count']) / this.sizePage
        const response = await data.data
        setTimeout(() => {
          this.posts = response
          this.$refs.loader.close()
        }, 100)
      } catch (e) {
        console.log(e)
      }
    },
    openModal() {
      this.visibleModal = true
    },
    changePage(page) {
      this.page = page
      this.searchInput = ''
      this.fetchPosts()
    }
  },
  computed: {
    postsProps() {
      return {
        tableHeader: this.tableHeader
      }
    },
    // filtedList() {
    //    return this.posts.filter((post) => {
    //       return post.title.toLowerCase().includes(this.searchInput.toLowerCase())
    //    })
    // }
    // selectedSortFunc() {
    //    return [...this.posts].sort((post1, post2) => {
    //       return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //    })
    // },
    // selectedSortFunc() {
    //    return [...this.posts].sort((post1, post2) => {
    //       return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
    //    })
    // },
    filtredList() {
      return this.posts.filter((post) => post.title.includes(this.searchInput.toLowerCase().trim()))
    }
  },
  watch: {
    selectedSort() {
      return this.posts.sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      })
    },
    // searchInput(newValue) {
    //    this.posts.filter((post) => {
    //       return post.title.includes(newValue)
    //    })
    // }
    // searchInput(newValue) {
    //    this.posts.filter((post) => {
    //       return post.title.toLowerCase().includes(newValue.toLowerCase())
    //    })
    // }
  },

  mounted() {
    this.fetchPosts()
  }
})
</script>

<style lang="scss">
</style>