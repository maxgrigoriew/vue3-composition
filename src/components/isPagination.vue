<template>
   <nav aria-label="Page navigation example">
      <ul class="pagination">
         <li class="page-item">
            <a class="page-link" href="#">Previous</a>
         </li>
         <li v-for="page in totalPages"
             :key="page"
             @click="changePage(page)"
             class="page-item"
             :class="{
                'active': page === currentPage
             }"
         >
            <a class="page-link" href="#">{{ page }}</a>
         </li>
         <li class="page-item">
            <a class="page-link" href="#">Next</a>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
   name: "isPagination",
   props: ['totalPages', 'currentPage'],
   methods: {
      changePage(page) {
         this.$emit('changePage', page)
      }
   }
}
</script>

<style scoped>
</style>