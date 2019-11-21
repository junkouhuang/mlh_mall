<template>
  <div>
    <headers></headers>
    <banners></banners>
    <contents></contents>
    <footers></footers>
  </div>
</template>

<script>
  import headers  from '../Header/Home'
  import banners  from '../Banner/Home'
  import contents  from './components/content'
  import footers  from '../Footer/Home'
  export default {
    name: "Home",
    data() {
      return {
        BrannerList: [
          {
            url: require('./Image/index_banner_img.png'),
            title: '1'
          },
          {
            url: require('./Image/index_banner_img.png'),
            title: '2'
          },
          {
            url: require('./Image/index_banner_img.png'),
            title: '3'
          },
          {
            url: require('./Image/index_banner_img.png'),
            title: ''
          }
        ]
      }
    },
    components: {
      headers,
      banners,
      contents,
      footers
    },
    methods: {},
      created() {
     this.$axios.get('api/api/bj11x5.json').then(res => {
        console.log(res)
      }).catch(e => {
        console.log("错误")
      })
    }
  }
</script>

<style  lang="less">

</style>
