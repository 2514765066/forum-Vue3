<template>
	<transition name="animate__animated animate__bounce animate__faster 50ms" enter-active-class="animate__fadeIn" leave-active-class="animate__fadeOut" appear>
		<main id="menu" class="h-sb-n p-a o-h" v-if="isShow" v-outside="Close">
			<section class="d-f">
				<img src="@/../public/header.png" class="c-img" />
				<div class="ml-1r h">
					<strong class="c-t mb-1r">name</strong>
					<button>个人资料</button>
				</div>
			</section>
			<footer>
				<button>退出</button>
			</footer>
		</main>
	</transition>
</template>

<script setup>
	import { onMounted, onUnmounted, ref } from "vue";
	import { $bus } from "@/hooks/useBus";

	const isShow = ref(false);

	const vOutside = {
		mounted(el, binding) {
			const handler = e => {
				if (!el.contains(e.target)) {
					binding.value();
				}
			};
			el.__vueClickOutside__ = handler;
			document.addEventListener("click", handler);
		},
		unmounted(el) {
			document.removeEventListener("click", el.__vueClickOutside__);
			el.__vueClickOutside__ = null;
		},
	};

	function Close() {
		isShow.value = false;
	}

	onMounted(() => {
		$bus.on("menuShow", () => {
			isShow.value = true;
		});
	});
	onUnmounted(() => {
		bus.off("menuShow");
	});
</script>

<style scoped lang="scss">
	main#menu {
		width: 20.625rem;
		height: 12rem;
		z-index: 900;
		top: 100%;
		right: 0;
		background-color: #fff;
		border-radius: 0.5rem;
		box-shadow: 0 5px 10px var(--mask);
		> footer {
			background-color: #f5f5f5;
			text-align: end;
			padding: 10px 20px;
		}
		> section {
			padding: 1.375rem 1.25rem;
		}
		button {
			padding: 0.4rem 1rem;
			border: 1px solid var(--blue);
			color: var(--blue);
			border-radius: 5px;
		}
		img {
			width: 6rem;
			height: 6rem;
			border-radius: 50%;
		}
	}
</style>
