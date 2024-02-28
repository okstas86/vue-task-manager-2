<template>
	<div class="wrap">
		<div>
			<img src="/task.png" alt="Task manadger" />
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap {
	margin: 0 auto;
}
div {
	height: 70vh;
	max-width: 60rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(180deg, #474232 0%, #28271c 100%);
	opacity: 0.9;
	border-radius: 1rem;
}
div img {
	width: 40rem;
	z-index: -1;
}
@media screen and (max-width: 768px) {
	div {
		width: 20rem;
		height: 20vh;
	}
	div img {
		width: 15rem;
	}
}
</style>
