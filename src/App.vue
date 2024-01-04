<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
@import url('./assets/styles/common'); // 全局样式
@import url('./assets/styles/padding-margin'); // 单独配置padding和margin
</style>
