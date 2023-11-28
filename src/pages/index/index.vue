<template>
  <view>
    <!--    <u-calendar-old v-model="show" mode="range"></u-calendar-old>-->
    <u-radio-group
      v-model="radioValue"
      placement="column"
      @change="groupChange"
    >
      <u-radio
        @change="radioChange"
        name="123"
        :isCancel="true"
      ></u-radio>
      <u-radio
        @change="radioChange"
        name="1234"
      ></u-radio>
    </u-radio-group>
    {{radioValue}}
  </view>
</template>
<script setup lang="ts">
import {ref, reactive, computed} from 'vue';
// import UCalendarOld from "@/uview-max/components/u-calendar-old/u-calendar-old.vue"

const show = ref(true)
const radioValue = ref('')
const groupChange = (e:any) => {
  console.log(e)
}
const radioChange = (e:any) => {
  console.log(e)
}
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
