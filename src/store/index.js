import { createStore } from 'vuex';

const store = createStore({
  state: {
    tasks: [
      {
        id: 1,
        title: 'Task from work',
        description: 'Create an app that I was assigned at work',
      },
    ],
    editingTaskId: null,
  },
  mutations: {
    addTask(state, task) {
      const newTask = {
        id: new Date().toISOString(),
        title: task.title,
        description: task.description,
      };
      state.tasks.unshift(newTask);
    },

    updateTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
    },

    deleteTask(state, taskId) {
      const index = state.tasks.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    setEditingTaskId(state, taskId) {
      state.editingTaskId = taskId;
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },

    updateTask({ commit }, updatedTask) {
      commit('updateTask', updatedTask);
    },

    deleteTask({ commit }, taskId) {
      commit('deleteTask', taskId);
    },
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
});

export default store;
