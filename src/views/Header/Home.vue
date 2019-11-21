<template>
  <div>
    <div class="header">
      <div class="container">
        <router-link to="/home"> <img src="./Image/mlh_logo.png" alt="民乐荟logo"/></router-link>
        <div class="home-header-container">
          <div class="home-header-search">
            <el-input placeholder="小二七星茶" class="text" v-model="getInput">
              <el-button slot="append"  class="search-btn">
                <img  src="./Image/search.png" class="search-icon"/>
              </el-button>
            </el-input>
          </div>
          <div class="search-history">
            <ul>
              <li><router-link to="/default" class="active">热门搜索</router-link></li>
              <li><router-link to="/default">感冒咳嗽</router-link></li>
              <li><router-link to="/default">健康饮品</router-link></li>
              <li><router-link to="/default">营养保障</router-link></li>
              <li><router-link to="/default">健康饮品</router-link></li>
              <li><router-link to="/default">健康饮品</router-link></li>
            </ul>
          </div>
        </div>
        <div class="shopping-car">
          <router-link to="/login"><img  src="./Image/index_shopping.png" /><span>我的购物车</span></router-link>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="container">
        <div class="list">
          <div class="dt">
            <img src="./Image/index_nav_liebiao_icon.png">所有分类
          </div>
          <div class="nav-item">
            <ul>
              <li><router-link to="/default"><span>健康药品</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>家电/厨具/装修</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>服装/配饰/内衣</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>手机/电脑/办公</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>食品/酒类/生鲜</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>汽车用品/汽车</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>图片/教育/文娱</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>运动/户外</span><i class="el-icon-arrow-right"></i></router-link></li>
              <li><router-link to="/default"><span>艺术/鲜花/礼品</span><i class="el-icon-arrow-right"></i></router-link></li>
            </ul>
          </div>
        </div>
        <ol>
         <li><router-link to="/">首页</router-link></li>
          <li><router-link to="medical">家用医疗</router-link></li>
          <li><router-link to="health">营养健康</router-link></li>
          <li><router-link to="eyes">靓眼世界</router-link></li>
          <li><router-link to="beautify">美容养生</router-link></li>
       <!--   <li @click="urlJump('home')">首页</li>
          <li @click="urlJump('medical')">家用医疗</li>
          <li @click="urlJump('health')">营养健康</li>
          <li @click="urlJump('eyes')">靓眼世界</li>
          <li @click="urlJump('beautiful')">美容养生</li>-->
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  import bus from '../../common/js/eventBus'
  export default {
    name: "Home",
    data () {
      return {
        getInput:'',
        type:0
      }
    },
    components: {

    },
    methods:{
      //跳转首页
      urlJump(type){
        this.type = type;
        bus.$emit("urlJump", this.type);
      },
      //跳转家用医疗
    }
  }
</script>

<style  lang="less">
  @width:1190px;
  .header {
    width: 100%;
    height: 108px;
    background-color: #fff;
    .container {
      width:@width;
      margin: auto;
      height: 100%;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 25px;
        width: 137px;
      }
      .home-header-container {
        position: absolute;
        top: 28px;
        right: 166px;
        .home-header-search {
          width: 550px;
          .text {
            height: 36px;
            input {
              border-radius: 0;
              border-width: 2px 0 2px 2px;
              border-color: #056E40;
              border-style: solid;
              height: 36px;
            }
          }
          .search-btn {
            height: 36px;
            background-color: #056E40;
            position: relative;
            border: 1px solid #056e40;
            border-radius: 0;
            .search-icon {
              width: 22px;
              position: absolute;
              left: 8px;
              top: 8px;
            }
          }
        }
        ul {
          display: flex;
          li {
            margin:  8px 11px;
            font-size: 14px;
            color: #999;
            cursor: pointer;
            a {
              color: #999999;
              &:hover {
                color: #056E40;
              }
            }
            .active {
              color: #3c3c3c
            }
          }
        }
      }
      .shopping-car {
        position: absolute;
        top: 28px;
        right: 0;
        border: 1px solid #f5f5f5;
        width: 138px;
        height: 36px;
        line-height: 36px;
        a {
          cursor: pointer;
          text-decoration: none;
          img {
            width: 23px;
            position: absolute;
            top: 7px;
            left: 15px;
          }
          span {
            font-size: 14px;
            color: #056E40;
            margin-left: 50px;
          }
        }
      }
    }
  }
  .nav {
    width: 100%;
    height: 36px;
    line-height: 36px;
    background-color: #fff;
    .container{
      width:@width;
      margin: auto;
      height: 100%;
      position: relative;
      .list {
        width: 187px;
        height: 100%;
        float: left;
        .dt {
          width: 187px;
          height: 100%;
          background-color: #333333;
          color: #ffffff;
          float: left;
          cursor: pointer;
          text-align: center;
          img {
            position: absolute;
            left: 23px;
            top: 13px;
          }
        }
        .nav-item {
          position: absolute;
          top: 36px;
          left: 0;
          width: 187px;
          height: 450px;
          z-index: 999;
          background: rgba(255,255,255,0.5);
          ul {
            display:block;
            li {
              height: 50px;
              line-height: 50px;
              cursor: pointer;
              a {
                color: #333333;
                span {
                  text-align: left;
                  display: inline-block;
                  width: calc(187px - 40px);
                  margin-left: 10px;
                }
              }
              &:hover {
                background-color: #ffffff;
              }
            }
          }
        }
      }
      ol {
        display: flex;
        float: left;
        li {
          height: 36px;
          line-height: 36px;
          cursor: pointer;
          margin-left: 60px;
          font-weight: 400;
          font-size: 15px;
          a {
            text-decoration: none;
            color: #333333;
          }
          &:hover {
            color: #056E40;
            font-weight: bold;
          }
        }
        .active {
          color: #056E40;
          font-weight: bold;
        }
      }
    }
  }
</style>
