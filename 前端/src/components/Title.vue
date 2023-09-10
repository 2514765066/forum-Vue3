<template>
	<nav class="h" id="title">
		<section class="v-sb-c">
			<div class="c-t v-n-c">
				<i class="fa-solid fa-bars-staggered mr-1r v-c-c click hover" @click="toggleNav"></i>
				<span class="mr-2r">博客论坛</span>
				<span class="c-s">首页</span>
			</div>
			<div class="v-n-c p-r" v-if="false">
				<i class="fa-solid fa-bell c-s mr-2r fs-20"></i>
				<img src="@/../public/header.png" class="c-img click" @click.stop="MenuShow"/>
				<Menu />
			</div>
			<div class="v-n-c" v-else>
				<button class="mr-1r hover" @click="toLogin">登录</button>
				<button class="hover" @click="toRegister">注册</button>
			</div>
		</section>
	</nav>
</template>

<script setup>
	import Menu from "@/components/Menu.vue";
	import { $bus } from "@/hooks/useBus";
	import { ref } from "vue";

	function toggleNav() {
		$bus.emit("toggleNav");
	}
	function toLogin() {
		$bus.emit("loginShow");
	}
	function toRegister() {
		$bus.emit("registerShow");
	}
	function MenuShow(){
		$bus.emit("menuShow")
	}
</script>

<style scoped lang="scss">
	nav#title {
		padding: 0 1.5rem;
		background-color: #fff;
		box-shadow: 0 1px 5px var(--shadow);
		> section {
			height: 4rem;
			> div:first-child {
				> i {
					width: 3rem;
					height: 3rem;
					border-radius: 50%;
					font-size: 1.25rem;
				}
				> span:nth-child(2) {
					font-size: 25px;
				}
				> span:last-child {
					font-size: 20px;
				}
			}
			> div:last-child {
				> img {
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				button {
					padding: 0.5rem 1rem;
				}
			}
		}
	}
</style>
