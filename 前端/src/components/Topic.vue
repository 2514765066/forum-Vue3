<template>
	<article id="topic" class="border h o-h">
		<img src="@/../public/26.jpg" class="c-img w-100" />
		<div>
			<p class="mb-1r c-t">学习讨论</p>
			<aside class="v-sb-c">
				<i class="fa-regular fa-star c-s v-c-c"></i>
				<span class="c-s fs-14">1人关注</span>
			</aside>
		</div>
	</article>
</template>

<script setup></script>

<style scoped lang="scss">
	article#topic {
		width: calc((100% - 3rem) / 4);	
		height: 14.5rem;
		> img {
			height: 9rem;
		}
		> div {
			padding: 0.625rem 1rem;
			i {
				height: 1.875rem;
				width: 1.875rem;
				border: 1px solid var(--border);
				border-radius: 50%;
				font-size: 0.875rem;
			}
		}
	}
</style>
