<template>
	<div>
		<base-dialog
			v-if="inputIsInvalid"
			title="Invalid Input"
			@close="confirmError"
		>
			<template #default>
				<p>Unfortunately, at least one input value is invalid.</p>
				<p>
					Please check all inputs and make sure you enter at least a few
					characters into each input field.
				</p>
			</template>
			<template #actions>
				<base-button @click="confirmError">Ok</base-button>
			</template>
		</base-dialog>
		<base-card>
			<form @submit.prevent="submitData" action="#">
				<div class="form-control">
					<label for="Title">Title</label>
					<input id="title" name="title" type="text" v-model="task.title" />
				</div>
				<div class="form-control">
					<label for="Description">Description</label>
					<textarea
						id="description"
						name="description"
						rows="3"
						v-model="task.description"
					></textarea>
				</div>

				<div>
					<base-button type="submit">Add Task</base-button>
				</div>
			</form>
		</base-card>
	</div>
</template>

<script>
export default {
	name: "FormList",
	data() {
		return {
			task: {
				title: "",
				description: "",
			},
			inputIsInvalid: false,
		}
	},
	computed: {
		isFormValid() {
			return (
				this.task.title.trim() !== "" && this.task.description.trim() !== ""
			)
		},
	},
	methods: {
		submitData() {
			if (!this.isFormValid) {
				this.inputIsInvalid = true
				return
			}

			const task = {
				title: this.task.title,
				description: this.task.description,
			}
			this.task.title = ""
			this.task.description = ""
			this.$store.dispatch("addTask", task)
			this.$router.push("/tasks")
		},
		confirmError() {
			this.inputIsInvalid = false
		},
	},
}
</script>
<style scoped>
label {
	display: block;
	margin-bottom: 0.5rem;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: #bac6dc;
}
input,
textarea {
	width: 100%;
	padding: 0.75rem 1rem;
	line-height: 1.5;
	background-color: #d1d5db;
	color: #374151;
	border: 1px solid transparent;
	border-radius: 0.25rem;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

input:focus,
textarea:focus {
	outline: none;
}

.form-control {
	margin: 1rem 0;
}

@media screen and (max-width: 768px) {
	input,
	textarea {
		width: 15rem;
		padding: 0.1rem 0.2rem;
	}
}
</style>
