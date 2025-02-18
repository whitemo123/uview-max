<template>
	<view>
		<u-calendar :show="show"></u-calendar>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
</script>