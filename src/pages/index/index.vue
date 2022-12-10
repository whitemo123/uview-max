<template>
  <view>
    <u-input v-model="str" @input="handleInput"></u-input>
    <button @click="handleClick">click</button>
    <u-waterfall-fake :listData="listData">
      <template v-slot:left="{ entity, index }">
        <view class="goods">
          <image :src="entity.img"></image>
          <view>{{entity.name}}</view>
        </view>
      </template>
      <template v-slot:right="{ entity, index }">
        <view class="goods">
          <image :src="entity.img"></image>
          <view>{{entity.name}}</view>
        </view>
      </template>
    </u-waterfall-fake>
  </view>
</template>
<script setup lang="ts">
import {ref, reactive, computed} from 'vue';
import waterfalls from "@/components/waterfalls/waterfalls"
const str = ref("")
const listData = ref<any>([{
  img: 'https://thorui.cn/images/mall/product/1.jpg',
  name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）',
  sale: 599,
  factory: 899,
  payNum: 2342
},
  {
    img: 'https://thorui.cn/images/mall/product/2.jpg',
    name: '德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒',
    sale: 29,
    factory: 69,
    payNum: 999
  },
  {
    img: 'https://thorui.cn/images/mall/product/3.jpg',
    name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
    sale: 299,
    factory: 699,
    payNum: 666
  },
  {
    img: 'https://thorui.cn/images/mall/product/4.jpg',
    name: '百雀羚套装女补水保湿护肤品',
    sale: 1599,
    factory: 2899,
    payNum: 236
  },
  {
    img: 'https://thorui.cn/images/mall/product/5.jpg',
    name: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
    sale: 599,
    factory: 899,
    payNum: 2399
  },
  {
    img: 'https://thorui.cn/images/mall/product/6.jpg',
    name: '短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤',
    sale: 599,
    factory: 899,
    payNum: 2399
  },
  {
    img: 'https://thorui.cn/images/mall/product/1.jpg',
    name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜',
    sale: 599,
    factory: 899,
    payNum: 2342
  },
  {
    img: 'https://thorui.cn/images/mall/product/2.jpg',
    name: '德国DMK进口牛奶',
    sale: 29,
    factory: 69,
    payNum: 999
  },
  {
    img: 'https://thorui.cn/images/mall/product/3.jpg',
    name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
    sale: 299,
    factory: 699,
    payNum: 666
  },
  {
    img: 'https://thorui.cn/images/mall/product/4.jpg',
    name: '百雀羚套装女补水保湿护肤品',
    sale: 1599,
    factory: 2899,
    payNum: 236
  }])

const handleClick = () => {
  listData.value[1].name = "修改"
  setTimeout(() => {
    listData.value = []
  }, 3000)
}

const handleInput = (e: any) => {
  str.value = "修改"
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
