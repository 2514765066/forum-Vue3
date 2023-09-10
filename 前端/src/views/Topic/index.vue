<template>
	<main id="topic" class="mt-1r d-f f-w">
		<TopNav :data="navData" />
		<Topic v-for="item of 10" />
		<BottomTip />
	</main>
</template>

<script setup>
	import Topic from "@/components/Topic.vue";
	import BottomTip from "@/components/BottomTip.vue";
	import TopNav from "@/components/TopNav.vue";

	const navData = [
		{
			title: "已关注",
			key: 0,
			click() {},
		},
		{
			title: "精选",
			key: 1,
			click() {},
		},
	];
</script>

<style scoped lang="scss">
	main#topic {
		width: 65rem;
		> * {
			margin-right: 1rem;
			margin-bottom: 1rem;
		}
		> *:nth-child(4n) {
			margin-right: 0;
		}
	}
</style>
