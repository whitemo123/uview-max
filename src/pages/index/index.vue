<template>
  <view>
    <u-calendar-old v-model="show" mode="range"></u-calendar-old>
  </view>
</template>
<script setup lang="ts">
import {ref, reactive, computed} from 'vue';
import UCalendarOld from "@/uview-max/components/u-calendar-old/u-calendar-old.vue"

const show = ref(true)
</script>
<style lang="scss" scoped>
.goods {
  width: 100%;
  image {
    width: 100%;
  }
  view {
    width: 100%;
  }
}
</style>
