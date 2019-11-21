<template>
  <div>
    <headers></headers>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="450px">
        <el-carousel-item v-for="item in BrannerList" :key="item.title">
          <router-link to="/default"><img class="bannerImg" :src="item.url" alt="" ></router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <contents></contents>
    <footers></footers>
  </div>
</template>

<script>
  import headers  from '../Header/Home'
  import contents  from '../Home/components/content'
  import footers  from '../Footer/Home'
  export default {
    name: "Home",
    data () {
      return {
        BrannerList: [
          {
            url:require('./Image/timg.jpg'),
            title: '1'
          },
          {
            url: require('./Image/timg.jpg'),
            title: '2'
          },
          {
            url: require('./Image/timg.jpg'),
            title: '3'
          },
          {
            url: require('./Image/timg.jpg'),
            title: ''
          }
        ]
      }
    },
    components: {
      headers,
      contents,
      footers

    }
  }
</script>

<style  lang="less">
  @width:1190px;
  .banner {
    position: relative;
    width: 100%;
    height: 450px;
    background: #00c06d;
    .bannerImg {
      width: 100%;
      height: 100%;
    }
  }
</style>
