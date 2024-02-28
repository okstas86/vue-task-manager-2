<template>
	<header>
		<div>
			<router-link to="/">Task Manager</router-link>
		</div>
		<nav>
			<ul>
				<li>
					<router-link to="/tasks">Tasks</router-link>
				</li>
				<li>
					<router-link to="/form">Add Task</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	computed: {
		cartQuantity() {
			return this.$store.getters["cart/quantity"]
		},
		isLoggedIn() {
			return this.$store.getters.isAuthenticated
		},
	},
	methods: {
		login() {
			this.$store.dispatch("login")
		},
		logout() {
			this.$store.dispatch("logout")
		},
	},
}
</script>

<style scoped>
header {
	height: 5rem;
	background: linear-gradient(180deg, #474232 0%, #28271c 100%);
	margin: 0 10%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1rem;
	padding: 0 2rem;
	border-radius: 0.5rem;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	justify-self: center;
	align-items: center;
}

li {
	margin: 0 1rem;
}

a {
	font-size: 1.2rem;
	text-decoration: none;
	color: #bac6dc;
	font-weight: bold;
}

a:hover,
a:active,
a.router-link-active {
	color: #f0920e;
}

@media screen and (max-width: 768px) {
	header {
		height: 3rem;
		padding: 0 0.5rem;
	}

	a {
		font-size: 0.8rem;
		margin: 0 0.5rem;
	}
}
</style>
