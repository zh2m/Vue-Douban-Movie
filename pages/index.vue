<template>
  <div class="movie">
    <h1>Welcome to movie</h1>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  asyncData(context, callback) {
    axios.get("http://localhost:3301/in_theaters").then(res => {
      console.log(res);
    });
  }
};
</script>
