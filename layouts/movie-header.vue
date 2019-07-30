<template>
  <div class="movie-header">
    <movie-nav></movie-nav>
    <nuxt></nuxt>
  </div>
</template>
<script>
import MovieNav from "~/components/movie-nav";
export default {
  components: {
    MovieNav
  }
};
</script>
<style scoped>
.movie-header {
  padding-top: 60px;
}
</style>


