<template>
  <div class="container pt-3">
    <h2
      ref="h2"
      class="mb-3 text-right"
    >Страница постов</h2>
    <div class="d-flex justify-content-between">

      <is-button
        @click="openModal"
        class="align-items-center"
      >
        Добавить пост
      </is-button>

      <is-input
        style="width: 300px"
        v-model="searchInput"
        :placeholder="searchInput"
      />

      <is-select
        v-model="selectedSort"
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

import { computed, defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
  name: 'App',
  mixins: [testMixin, consoleMixin],
  components: { IsPagination, IsSelect, IsDialog, IsPosts, IsForm },
  setup() {
    const names = ref([{ name: 'max' }])
    const posts = ref([
      {
        id: 1,
        title: 'title',
        body: 'body'
      },
    ])
    const tableHeader = ref({
      id: 'id',
      title: 'Название',
      description: 'Описание',
      action: 'Действие'
    })

    const visibleModal = ref(false)

    const options = ref([
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По описанию' },
    ])

    const selectedSort = ref('')

    const searchInput = ref('')

    const page = ref(1)

    const sizePage = ref(10)

    const totalPages = ref(0)

    const loader = ref(null)

    const changePost = () => {
      console.log(posts.value[0].id)
      posts.value[0].id = 'bla bla'
    }

    const addPost = (post) => {
      posts.value.push(post)
      visibleModal.value = false
    }

    const removePost = (post) => {
      posts.value = posts.value.filter((item) => item.id !== post.id)
    }

    const fetchPosts = async () => {
      try {
        loader.value.open()
        let data = await axios.get('http://jsonplaceholder.typicode.com/posts/', {
          params: {
            _limit: sizePage.value,
            _page: page.value
          }
        })
        totalPages.value = +(data.headers['x-total-count']) / sizePage.value
        const response = await data.data
        setTimeout(() => {
          posts.value = response
        }, 1000);
        console.log('loader.value', loader)
        loader.value.close()
      } catch (e) {
        console.log(e)
      }
    }

    const openModal = () => {
      visibleModal.value = true
    }

    const changePage = (page) => {
      page.value = page
      searchInput.value = ''
      fetchPosts.value()
    }
    const postsProps = computed(() => {
      return {
        tableHeader: tableHeader.value
      }
    })

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
    const filtredList = computed(() => {
      return posts.value.filter((post) => post.title.includes(searchInput.value.toLowerCase().trim()))
    })

    watch(selectedSort, () => {
      return posts.value.sort((post1, post2) => {
        return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value])
      })
    })
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

    onMounted(() => {
      fetchPosts()
      console.log('loader', loader)
    })

    return {
      names,
      posts,
      tableHeader,
      visibleModal,
      options,
      selectedSort,
      searchInput,
      page,
      sizePage,
      totalPages,
      changePost,
      addPost,
      removePost,
      fetchPosts,
      openModal,
      changePage,
      postsProps,
      filtredList,
      loader,
    }
  }
})
</script>