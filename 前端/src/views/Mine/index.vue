<template>
	<main id="mine">
		<section class="h">
			<div v-src="'@/../public/loginbg.jpg'" class="p-r w-100">
				<i class="fa-solid fa-camera c-w fs-22 br-50 v-c-c p-a"></i>
			</div>
			<div class="d-f">
				<img src="@/../public/header.png" class="c-img br-50" />
				<span class="ml-2r">name</span>
			</div>
			<aside class="v-n-c">
				<i class="fa-solid fa-pencil br-50 v-c-c c-s hover"></i>
                        <button class="c-s hover">0位粉丝</button>
                        <div  class="c-s"></div>
                        <button  class="c-s hover">关注了0人</button>
			</aside>
		</section>
		<section></section>
	</main>
</template>

<script setup></script>

<style scoped lang="scss">
	main#mine {
		width: 52rem;
		> section:nth-child(1) {
			box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15);
			border-radius: 0 0 0.5rem 0.5rem;
			> div:nth-child(1) {
				height: 29rem;
				> i {
					top: 1rem;
					right: 1rem;
					width: 3rem;
					height: 3rem;
					background-color: var(--shadow);
				}
			}
			> div:nth-child(2) {
				padding: 1.25rem 1.5rem 1.25rem 1.25rem;
				> img {
					width: 6.25rem;
					height: 6.25rem;
					border: 5px solid var(--border);
				}
				> span {
					font-size: 2rem;
				}
			}
			aside {
				padding: 0 1.5rem 1rem 3.5625rem;
				> i {
					width: 2.25rem;
					height: 2.25rem;
					border: 1px solid var(--border);
                              margin-right: 3.625rem;
				}
                        >button{
                              padding: 0.5rem 1rem;
                        }
                        >div{
                              height: 1.2rem;
                              border: 1px solid var(--border);
                        }
			}
		}
		> section:nth-child(2) {
			border: 1px solid rgba(0, 0, 0, 0.12);
		}
	}
</style>
