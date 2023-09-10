<template>
	<Mask :isShow="isShow" :z="999">
		<main id="load" class="mb-3r">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</main>
		<h2 class="c-w">{{ data.title }}{{ dot }}</h2>
	</Mask>
</template>

<script setup>
	import Mask from "@/components/Mask.vue";
	import { $bus } from "@/hooks/useBus";
	import { onMounted, onUnmounted, reactive, ref } from "vue";

	const data = reactive({
		title: "",
	});
	const dot = ref("");
	const isShow = ref(false);
	setInterval(() => {
		dot.value += ".";
		if (dot.value.length == 4) {
			dot.value = "";
		}
	}, 500);

	onMounted(() => {
		$bus.on("loadShow", config => {
			data.title = config.title;
			isShow.value = true;
		});
		$bus.on("loadClose", func => {
			setTimeout(() => {
				isShow.value = false;
				func();
			}, 2000);
		});
	});
	onUnmounted(() => {
		$bus.off("loadShow");
		$bus.off("loadClose");
	});
</script>

<style scoped lang="scss">
	h2 {
		text-shadow: 0 0 3px rgba(0, 0, 0);
	}
	main#load {
		display: grid;
		grid-template-rows: repeat(3, 50px);
		grid-template-columns: repeat(3, 50px);
		transform: rotate(45deg);
		> div {
			margin: 2px;
			background-color: #fff;
			border-radius: 8px;
			animation: loading 1.5s ease-in-out infinite;
		}
		@keyframes loading {
			0%,
			100% {
				opacity: 0;
				transform: scale(0);
			}
			35%,
			65% {
				opacity: 1;
				transform: scale(1);
			}
		}
		> div:nth-child(7) {
			animation-delay: 0.6s;
		}
		> div:nth-child(4n) {
			animation-delay: 0.7s;
		}
		> div:nth-child(4n + 1) {
			animation-delay: 0.8s;
		}
		> div:nth-child(4n + 2) {
			animation-delay: 0.9s;
		}
		> div:nth-child(3) {
			animation-delay: 1s;
		}

		> div:nth-child(-n + 3) {
			background-color: #4bc8ed;
		}

		> div:nth-child(n + 4) {
			background-color: #f13a8f;
		}

		> div:nth-child(n + 7) {
			background-color: #36f372;
		}
	}
</style>
