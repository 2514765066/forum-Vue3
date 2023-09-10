<template>
	<article class="w-100 d-f click">
		<img src="@/../public/header.png" class="c-img mr-1r" />
		<section class="h w-100">
			<p class="c-t mb-1">{{ data.name }}</p>
			<div class="c-te v-sb-c w-100">
				<div class="c-te fs-14 f-1">{{ data.subtitle }}</div>
				<aside class="fs-13 ml-4r">
					<span class="fs-13 mr-1r ml-1r">发布于20分钟之前</span>
					<span class="fs-13">{{data.comment.length}}个问答</span>
				</aside>
			</div>
		</section>
	</article>
</template>

<script setup>
	import { defineProps, toRefs } from "vue";

	const props = defineProps({
		data: Object,
	});

	const { data } = toRefs(props);
</script>

<style scoped lang="scss">
	article {
		height: 4.75rem;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--l-border);
		transition: 0.3s background-color;
		> img {
			width: 1.25rem;
			height: 1.25rem;
			border-radius: 50%;
		}
		> section {
			> div {
				> div {
					width: 100px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				> aside > span:nth-child(1) {
					display: none;
				}
			}
		}
		&:hover {
			background-color: rgba(0, 0, 0, 0.04);
			> section > div > aside {
				margin: 0;
				> span:nth-child(1) {
					display: inline-block;
				}
			}
		}
	}
</style>
