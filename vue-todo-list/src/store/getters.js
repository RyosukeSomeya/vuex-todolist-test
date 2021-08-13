export default {
    getTodoList: (state) => {
        if (state.showStatus === 'done') {
            const filtered = state.todos.filter((todo) => {
                return todo.status === 'done';
            });
            return filtered;
        } else if (state.showStatus === 'wip') {
            const filtered = state.todos.filter((todo) => {
                return todo.status === 'wip';
            });
            return filtered
        } else {
            return state.todos;
        }
    },
}
