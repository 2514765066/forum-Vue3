<template>
	<div id="hr" v-if="data.isHr"></div>
	<router-link :to="routePath" class="p-1r" v-else>
		<i class="fa-solid mr-2r c-s" :class="data.icon"></i>
		<span class="c-t">{{ data.title }}</span>
	</router-link>
</template>

<script setup>
	import { computed, toRefs } from "vue";
	const props = defineProps({
		data: Object,
	});
	const { data } = toRefs(props);
	const routePath = computed(() => data.value.route || "/home");
</script>

<style scoped lang="scss">
	a {
		font-size: 14px;
		border-radius: 0 25px 25px 0;
		transition: 0.3s background-color;
		&:hover:not(.select) {
			background-color: rgba(0, 0, 0, 0.04);
		}
	}
	div#hr {
		margin: 0.5rem 0 0.5rem;
		border: 1px solid var(--border);
	}
	.select {
		background-color: var(--glass);
		* {
			color: var(--blue) !important;
		}
	}
</style>
