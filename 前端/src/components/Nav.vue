<template>
	<transition name="animate__animated animate__bounce animate__faster " enter-active-class="animate__slideInLeft" leave-active-class="animate__slideOutLeft">
		<section id="nav" class="h mt-1r" v-if="isShow">
			<NavItem v-for="item of nav" :key="item.key" @click="navIndex = item.key" :data="item" :class="{ select: navIndex == item.key }" />
		</section>
	</transition>
</template>

<script setup>
	import NavItem from "./NavItem.vue";
	import { $bus } from "@/hooks/useBus";
	import { onMounted, onUnmounted, reactive, ref } from "vue";

	const isShow = ref(true);
	const navIndex = ref(0);
	const nav = [
		{ key: 0, title: "首页", icon: "fa-house", route: "/home" },
		{ key: 1, title: "话题", icon: "fa-square-poll-horizontal", route: "/topic" },
		{ key: 2, title: "问答", icon: "fa-message", route: "/question" },
		{ key: 3, title: "文章", icon: "fa-file-lines", route: "/article" },
		{ key: 4, isHr: true },
		{ key: 5, title: "个人中心", icon: "fa-circle-user", route: "/mine" },
		{ key: 6, title: "论坛成员", icon: "fa-users" },
		{ key: 7, title: "关于", icon: "fa-paper-plane" },
		{ key: 8, title: "通知", icon: "fa-bell" },
	];

	onMounted(() => {
		$bus.on("toggleNav", () => {
			isShow.value ? (isShow.value = false) : (isShow.value = true);
		});
	});
	onUnmounted(() => {
		$bus.off("toggleNav");
	});
</script>

<style scoped lang="scss">
	section#nav {
		width: 15rem;
		> * {
			font-size: 14px;
			border-radius: 0 25px 25px 0;
			transition: 0.3s background-color;
			&:hover:not(.select) {
				background-color: rgba(0, 0, 0, 0.04);
			}
		}
	}
</style>
