<template>
  <div>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="450px">
        <el-carousel-item v-for="(item,index) in BrannerList" :key="index">
          <router-link to="/default"><img class="bannerImg" :src="item" alt="" ></router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import bus from '../../common/js/eventBus'
  let SlideImg ={
      home:[
        require('./Image/index_banner_img.png'),
        require('./Image/index_banner_img.png'),
        require('./Image/index_banner_img.png')
      ],
      medical:[
        require('./Image/medical_banner_img.png'),
        require('./Image/medical_banner_img.png'),
        require('./Image/medical_banner_img.png')
      ],
      health:[
        require('./Image/health_banner_img.png'),
        require('./Image/health_banner_img.png'),
        require('./Image/health_banner_img.png')
      ],
      eyes:[
        require('./Image/eyes_banner_img.png'),
        require('./Image/eyes_banner_img.png'),
        require('./Image/eyes_banner_img.png')
      ],
      beautiful:[
        require('./Image/beautiful_banner_img.png'),
        require('./Image/beautiful_banner_img.png'),
        require('./Image/beautiful_banner_img.png')
      ]
    }

  export default {
    name: "Home",
    data () {
      return {
        BrannerList: [],
        SliderImg:SlideImg,
        msg:0
      }
    },
    components: {

    },
    methods:{

    },
    created(){

      this.BrannerList = SlideImg.home;
    },
    mounted(){
      bus.$on("urlJump",(type) => {
        this.BrannerList = SlideImg[type]
      });
    },
    watch: {
      BrannerList(val) {
        this.BrannerList = val
      }
    },
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
