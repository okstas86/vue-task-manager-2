<template>
	<button :class="mode">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: ["mode"],
}
</script>

<style scoped>
button {
	padding: 0.5rem 1rem;
	font-weight: 600;
	text-transform: uppercase;
	border-radius: 0.25rem;
	color: #1f2937;
	background-color: #f0b322;
	border-radius: 6px;
	border: none;
}

button:hover,
button:active {
	background-color: #f0920e;
}

@media screen and (max-width: 768px) {
	button {
		font-size: 0.8rem;
	}
}
</style>
