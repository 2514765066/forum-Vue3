<template>
	<label>
		<input :type="type" required :value="modelValue" @input="emit('update:modelValue', $event.target.value)" />
		<p>{{ title }}</p>
	</label>
</template>

<script setup>
	import { defineProps, toRefs } from "vue";

	const props = defineProps({
		title: String,
		type: String,
		data: Object,
		modelValue: String,
	});

	const { modelValue, title, type } = toRefs(props);
	const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped lang="scss">
	label {
		width: 100%;
		color: #bbb;
		p {
			line-height: 36px;
			transform: translateY(-100%);
			transition: transform 0.3s;
		}
		input {
			color: #333;
			font-size: 1rem;
			width: 100%;
			height: 2.25rem;
			border-bottom: 1px solid rgba(0, 0, 0, 0.42);
			&:focus {
				& + p {
					transform: translateY(-170%);
					color: var(--l-blue);
					font-size: 0.75rem;
				}
				& {
					border-bottom: 2px solid var(--l-blue);
				}
			}
			&:valid {
				& + p {
					transform: translateY(-170%);
					font-size: 0.75rem;
				}
			}
		}
	}
</style>
