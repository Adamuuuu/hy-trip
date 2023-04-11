<template>
  <router-view></router-view>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="search" to="/message">消息</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="collect">收藏</van-tabbar-item>
    <van-tabbar-item icon="setting-o" to="order">订单</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style scoped lang="less"></style>