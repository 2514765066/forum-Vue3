<template>
	<Load />
	<Login />
	<Register />
	<main id="app" class="h">
		<Title />
		<Tip />
		<div class="d-f h-100">
			<Nav />
			<section class="wh-100 h-n-c">
				<router-view></router-view>
			</section>
		</div>
	</main>
</template>

<script setup>
	import Login from "@/views/User/Login.vue";
	import Register from "@/views/User/Register.vue";
	import Title from "@/components/Title.vue";
	import Nav from "@/components/Nav.vue";
	import Load from "@/components/Load.vue";
	import Tip from "@/components/Tip.vue";
</script>

<style lang="scss">
	main#app {
		height: 100vh;
		background-image: url("@/../public/bg.jpg");
		background-size: cover;
		--border: rgba(0, 0, 0, 0.12);
		--l-border: rgba(0, 0, 0, 0.08);
		--shadow: rgba(0, 0, 0, 0.3);
		--glass: rgba(255, 255, 255, 0.5);
		--text: #999;
		--mask: rgba(0, 0, 0, 0.5);
		--input-border: rgba(0, 0, 0, 0.5);
	}
	.border {
		border: 1px solid var(--border);
		border-radius: 0.5rem;
	}
	i.fa-arrow-right {
		color: var(--blue);
	}
	.hover {
		transition: 0.3s background-color;
		border-radius: 0.5rem;
		cursor: pointer;
		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
</style>
