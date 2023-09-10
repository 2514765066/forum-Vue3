<template>
	<main id="article" class="mt-1r h">
		<Item v-for="item of data" :data="item" />
	</main>
	<BottomTip />
</template>

<script setup>
	import Item from "@/components/Item.vue";
	import BottomTip from "@/components/BottomTip.vue";
	const data = [
		{
			name: "张铭洋",
			subtitle: "Amet voluptua sea et justo ut clita delenit tation vero dolores nihil. At elitr sadipscing accumsan accumsan lorem consetetur et amet et ipsum nostrud justo ullamcorper magna sanctus adipiscing lorem aliquyam. Ea dolores nisl nulla et ea diam est duo ipsum ipsum aliquyam sadipscing voluptua. Lobortis liber sit sit et facilisis ipsum eirmod eos ipsum diam lorem eu ea et eos dolor liber consetetur. Vero takimata sit possim takimata at velit dolor elitr ad vero luptatum dolore eum eros clita amet lorem.",
			comment: [{}, {}],
		},
		{
			name: "张铭洋",
			subtitle: "Amet voluptua sea et justo ut clita delenit tation vero dolores nihil. At elitr sadipscing accumsan accumsan lorem consetetur et amet et ipsum nostrud justo ullamcorper magna sanctus adipiscing lorem aliquyam. Ea dolores nisl nulla et ea diam est duo ipsum ipsum aliquyam sadipscing voluptua. Lobortis liber sit sit et facilisis ipsum eirmod eos ipsum diam lorem eu ea et eos dolor liber consetetur. Vero takimata sit possim takimata at velit dolor elitr ad vero luptatum dolore eum eros clita amet lorem.",
			comment: [{}, {}],
		},
		{
			name: "张铭洋",
			subtitle: "Amet voluptua sea et justo ut clita delenit tation vero dolores nihil. At elitr sadipscing accumsan accumsan lorem consetetur et amet et ipsum nostrud justo ullamcorper magna sanctus adipiscing lorem aliquyam. Ea dolores nisl nulla et ea diam est duo ipsum ipsum aliquyam sadipscing voluptua. Lobortis liber sit sit et facilisis ipsum eirmod eos ipsum diam lorem eu ea et eos dolor liber consetetur. Vero takimata sit possim takimata at velit dolor elitr ad vero luptatum dolore eum eros clita amet lorem.",
			comment: [{}, {}],
		},
	];
</script>

<style scoped lang="scss">
	main#article {
		width: 51rem;
		box-shadow: 0 1px 3px var(--shadow);
		border-radius: 0.5rem;
		> *:last-child {
			border: none;
		}
	}
</style>
