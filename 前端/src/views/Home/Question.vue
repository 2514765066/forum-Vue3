<template>
	<article id="question" class="border h">
		<div class="v-sb-c p-1r">
			<span class="c-s">{{ props.title }}</span>
			<i class="fa-solid fa-arrow-right c-s"></i>
		</div>
		<div class="v-n-c p-1r hover">
			<img src="@/../public/header.png" class="mr-1r c-img" />
			<span class="c-t fs-15">关于网站更新</span>
		</div>
	</article>
</template>

<script setup>
	import { defineProps } from "vue";

	const props = defineProps({
		title: String,
	});
</script>

<style scoped lang="scss">
	article#question {
		width: calc(100% - 1rem);
		> div {
			height: 3.5rem;
			border-bottom: 1px solid var(--l-border);
			> img {
				width: 1.25rem;
				height: 1.25rem;
				border-radius: 50%;
			}
		}
		> div:last-child {
			border: none;
		}
	}
</style>
