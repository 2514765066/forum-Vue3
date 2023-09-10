<template>
	<Mask :isShow="isShow">
		<main id="login" class="o-h h p-r">
			<!-- 关闭 -->
			<button class="p-a v-c-c hover" @click="Close">
				<i class="fa-solid fa-xmark"></i>
			</button>

			<!-- 图 -->
			<img src="@/../public/loginbg.jpg" class="c-img w-100" />

			<!-- 标题 -->
			<p>登录</p>

			<!-- 表单 -->
			<form class="h-sb-c f-1" @submit.prevent="toLogin">
				<Entry v-model="data.username" title="账号" />
				<Entry v-model="data.password" title="密码" type="password" />

				<div class="v-sb-c w-100">
					<button type="button" class="c-t hover" @click="toReg">没有账号?</button>
					<button class="fs-15">登录</button>
				</div>
			</form>
		</main>
	</Mask>
</template>

<script setup>
	import Mask from "@/components/Mask.vue";
	import Entry from "./Entry.vue";
	import { $bus } from "@/hooks/useBus";
	import { onMounted, onUnmounted, reactive, ref } from "vue";
	import { Login } from "@/hooks/useUser";

	const isShow = ref(false);
	const data = reactive({
		username: "",
		password: "",
	});

	function Close() {
		isShow.value = false;
	}
	function toReg() {
		Close();
		$bus.emit("registerShow");
	}
	function toLogin(){
		Login('登陆中', data)
	}

	onMounted(() => {
		$bus.on("loginShow", () => {
			isShow.value = true;
		});
	});
	onUnmounted(() => {
		$bus.off("loginShow");
	});
</script>

<style scoped lang="scss">
	main#login {
		border-radius: 0.5rem;
		width: 28rem;
		height: 33.75rem;
		background-color: #fff;
		> button {
			width: 2.5rem;
			height: 2.5rem;
			top: 5px;
			right: 5px;
			font-size: 1.5625rem;
			color: #fff;
			text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
			border-radius: 50%;
		}
		> p {
			line-height: 60px;
			font-size: 25px;
			padding: 0 2.5rem;
			color: #fff;
			text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
			transform: translateY(-100%);
		}
		> img {
			height: 12.5rem;
		}
		> form {
			padding: 0 2.5rem 3.875rem;
			> div {
				button:first-child {
					padding: 0.5rem 1rem;
					border-radius: 0.5rem;
				}
				button:last-child {
					background-color: var(--l-blue);
					color: #fff;
					padding: 0.5rem 1.2rem;
					border-radius: 0.3125rem;
					box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
				}
			}
		}
	}
</style>
