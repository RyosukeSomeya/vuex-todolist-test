export default {
    addTodo({ commit }, newTodo) {
        commit('addTodoList', newTodo);
    },
    deleteTodo({ commit }, index) {
        commit('deleteTodo', index);
    },
    changeTodoStatus({ commit }, index) {
        commit('changeStatus', index);
    },
    selectStatus({ commit }, value) {
        commit('selectStatus', value);
    }
}
