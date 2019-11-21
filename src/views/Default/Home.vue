<template>
    <div>
      <div class="default">
        <img src="./Image/error.png">
        <p>开发小哥哥在火速开发中，敬请期待！</p>
        <router-link to="/home" tag="button" >返回首页</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="less">
  .default {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    img {
      width:421px;
    }
    p {
      color: #999999;
      margin: 32px 0;
      font-size: 16px;
      color: #999999;
    }
    button {
      border: 1px solid #555555;
      width:122px;
      height:40px;
      color: #555555;
      font-size:16px;
      font-weight: 400;
      cursor: pointer;
      background-color: #ffffff;
    }
  }
</style>
