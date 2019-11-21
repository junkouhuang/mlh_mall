<!--
 * @Author: your name
 * @Date: 2019-11-19 15:40:17
 * @LastEditTime: 2019-11-19 16:58:14
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \minlehui-mall\src\App.vue
 -->
<template>
  <div id="app">
    <keep-alive>
     <router-view/>
    </keep-alive>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
 width: 100%;
 min-width: 1190px;
 margin: 0 auto;
}
</style>
