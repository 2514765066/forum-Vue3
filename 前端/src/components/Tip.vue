<template>
	<transition name="animate__animated animate__bounce" enter-active-class="animate__bounceIn" leave-active-class="animate__bounceOut">
		<main class="v-c-c w-100 p-f" v-if="isShow">
			<span class="fs-14">
				<i class="fa-regular mr-1" :class="info.type ? 'fa-circle-check' : 'fa-circle-xmark'" />
				{{ info.title }}
			</span>
		</main>
	</transition>
</template>

<script setup>
	import { onMounted, onUnmounted, ref, reactive } from "vue";
	import { $bus } from "@/hooks/useBus";

	let isShow = ref(false);
	let info = reactive({
		title: "",
		type: true,
	});

	onMounted(() => {
		$bus.on("tipShow", config => {
			info = { ...info, ...config };
			isShow.value = true;
			setTimeout(() => {
				isShow.value = false;
				info = {
					title: "",
					type: true,
				};
			}, 1500);
		});
	});
	onUnmounted(() => {
		$bus.off("tipShow");
	});
</script>

<style scoped lang="scss">
	main {
		z-index: 1000;
		top: 15%;
		left: 0;
		> span {
			border-radius: 0.3125rem;
			padding: 0.6875rem 1.5rem;
			background-color: rgba(0, 0, 0, 0.6);
			color: #fff;
			i {
				color: #fff;
			}
		}
	}
</style>
