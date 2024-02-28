<template>
	<ul>
		<h1>Tasks</h1>
		<li v-for="task in tasks" :key="task.id">
			<base-card>
				<h3 v-if="task.id !== editingTaskId" @dblclick="editTask(task.id)">
					{{ task.title }}
				</h3>
				<input v-else type="text" v-model="task.title" @blur="saveTask(task)" />

				<p v-if="task.id !== editingTaskId" @dblclick="editTask(task.id)">
					{{ task.description }}
				</p>
				<textarea
					v-else
					v-model="task.description"
					@blur="saveTask(task)"
				></textarea>

				<base-button @click="deleteTask(task.id)">Delete</base-button>
			</base-card>
		</li>
	</ul>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
	name: "TaskList",
	computed: {
		...mapState(["tasks"]),
		editingTaskId() {
			return this.$store.state.editingTaskId
		},
	},
	methods: {
		...mapActions(["deleteTask", "updateTask"]),
		editTask(taskId) {
			this.$store.commit("setEditingTaskId", taskId)
		},
		saveTask(task) {
			this.$store.dispatch("updateTask", task)
			this.$store.commit("setEditingTaskId", null)
		},
	},
}
</script>

<style scoped>
h1 {
	text-align: center;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	font-weight: 600;
	letter-spacing: 0.4em;
	text-align: center;
	text-transform: uppercase;
	color: #9a3412;
}
h3,
p {
	color: #bac6dc;
	margin-bottom: 1rem;
}
ul {
	list-style: none;
	margin: 0;
	padding: 0;
	margin: auto;
	max-width: 40rem;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	padding: 0.15rem;
	margin-top: 1rem;
	border: 1px solid #ccc;
	margin-bottom: 1rem;
	background-color: #dce0e5;
}

input:focus,
textarea:focus {
	outline: none;

	margin-bottom: 1rem;
}
</style>
