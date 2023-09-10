<template>
	<main id="home" class="mt-1r">
		<div class="v-sb-c c-s mb-1r">
			<span>推荐话题</span>
			<i class="fa-solid fa-arrow-right"></i>
		</div>
		<section class="d-f mb-2r">
			<Topic v-for="item of 4" />
		</section>

		<section class="d-f mb-2r">
			<Question title="最近更新提问" />
			<Question title="最近热门提问" />
		</section>

		<section class="d-f mb-2r">
			<Article title="最新文章" />
			<Article title="最近热门文章" />
		</section>
	</main>
</template>

<script setup>
	import Topic from "@/components/Topic.vue";
	import Question from "./Question.vue";
	import Article from "./Article.vue";
</script>

<style scoped lang="scss">
	main#home {
		max-width: 65rem;
		> section {
			> * {
				margin-right: 1rem;
			}
			> *:last-child {
				margin-right: 0;
			}
		}
	}
</style>
