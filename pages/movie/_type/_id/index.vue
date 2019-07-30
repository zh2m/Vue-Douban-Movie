<template>
  <div class="detail">
    <div class="detail-box">
      <img :src="detail.img" :alt="detail.title" />
      <h3>{{detail.title}}</h3>
      <p>{{detail.genres.join(',')}}</p>
      <p>上映时间：{{detail.details[0].year}}</p>
      <p>简介：{{detail.details[0].summary}}</p>
    </div>
  </div>
</template>
<script>
import axios from "~/plugins/axios";

export default {
  layout: "movie-header",
  asyncData(context, callback) {
    axios
      .get(
        `/${context.route.params.type}/${context.route.params.id}?_embed=details`
      )
      .then(res => {
        console.log(res);
        callback(null, { detail: res.data });
      });
  }
};
</script>

<style scoped>
.detail {
  width: 40%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 10px #bbb;
}
.detail-box {
    text-align: center
}
</style>


