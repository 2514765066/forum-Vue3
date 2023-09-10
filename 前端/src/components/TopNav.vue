<template>
	<teleport to="#title">
		<nav id="topnav" class="v-c-c">
			<button
				class="k h-100"
				:class="{ select: navIndex == item.key }"
				v-for="item of data"
				:key="item.key"
				@click="
					navIndex = item.key;
					item.click();
				">
				{{ item.title }}
			</button>
		</nav>
	</teleport>
</template>

<script setup>
	import { defineProps, ref, toRefs } from "vue";

	const props = defineProps({
		data: Array,
	});

	const { data } = toRefs(props);
	const navIndex = ref(0);
</script>

<style scoped lang="scss">
	nav#topnav {
		height: 2.375rem;
		> button {
			width: 8.5rem;
			font-size: 0.875rem;
			color: #999;
			transition: 0.3s;
			border-bottom: 2px solid transparent;
		}
	}
	.select {
		color: var(--blue) !important;
		border-color: var(--blue) !important;
	}
</style>
