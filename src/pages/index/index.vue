<template>
  <view class="content">
    <u-tabbar
      :value="value1"
      @change="change1"
      :fixed="false"
      :placeholder="false"
      :safeAreaInsetBottom="false"
    >
      <u-tabbar-item iconSize="48rpx" text="首页" icon="home" ></u-tabbar-item>
      <u-tabbar-item text="放映厅" icon="photo" ></u-tabbar-item>
      <u-tabbar-item text="直播" icon="play-right" ></u-tabbar-item>
      <u-tabbar-item text="我的" icon="account"></u-tabbar-item>
    </u-tabbar>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')

const value1 = ref(0)

const change1 = () => {

}
</script>

<style>

</style>
