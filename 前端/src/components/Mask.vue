<template>
	<teleport to="body">
		<transition name="animate__animated animate__bounce animate__faster 50ms" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut" appear>
			<main id="mask" class="wh-100v p-f h-c-c" v-if="isShow" :style="{'z-index':props.z}">
				<slot></slot>
			</main>
		</transition>
	</teleport>
</template>

<script setup>
	import { defineProps } from "vue";

	const props = defineProps({
		isShow: Boolean,
		z: Number,
	});
</script>

<style scoped>
	main#mask {
		top: 0;
		left: 0;
		z-index: 990;
		background-color: var(--mask);
	}
</style>
