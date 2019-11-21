<template>
  <div>
    <div class="home-footer">
      <div class="commpany-info">
        <ul>
          <li>友情链接：</li>
          <li>xxxxx</li>
          <li>xxxxx</li>
          <li>xxxxx</li>
          <li>xxxxx</li>
        </ul>
        <p>版权所有：民乐荟健康产业（深圳）有限公司</p>
        <p>Copyright © 2019 minlehui All Rights Reserve</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
      }
    },
    components: {

    }
  }
</script>

<style  lang="less">
  @width:1190px;
  .home-footer {
    width:100%;
    margin: auto;
    .commpany-info {
      padding: 27px 0;
      width:@width;
      margin: auto;
      ul {
        line-height: 32px;
        display: flex;
        justify-content: center;
        li{
          color: #444444;
          font-size: 13px;
          margin-left: 10px;
        }
      }
      p {
        line-height: 32px;
        color: #444444;
        font-size: 14px;
        margin-left: 10px;
        text-align: center;
      }
    }
  }
</style>

