<template>
  <div class="movie">
    <h1>Welcome to movie</h1>
    <nuxt />
  </div>
</template>
<script>

export default {
  layout: "movie-header",
    head() {
        return {
            title: '电影主页',
            meta: [
                {nama: 'keywords', contents: '额外文件。如果没有文件匹配，大多'}
            ]
        }
    }
  
};
</script>

 


