export default {
    addTodoList(state, newTodo) {
        const todoItem = {
            comment: newTodo,
            status: 'wip'
        };
        state.todos.push(todoItem);
    },
    deleteTodo(state, index) {
        state.todos.splice(index, 1);
    },
    changeStatus(state, index) {
        if (state.todos[index].status === 'wip') {
            state.todos[index].status = 'done'
        } else {
            state.todos[index].status = 'wip'
        }
    },
    selectStatus(state, selectedStatus) {
        state.showStatus = selectedStatus;
    }
}
