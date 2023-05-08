<template>
   <transition>
      <div class="loader" v-if="status">
         <div class="spinner-border text-success" role="status">
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>
   </transition>
</template>

<script>
export default {
   name: "is-loader",
   data() {
      return {
         status: true
      }
   },
   methods: {
      close() {
         this.status = false
      },
      open() {
         this.status = true
      }
   }
}
</script>

<style scoped>
.loader {
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 10;
   background: #fff;
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