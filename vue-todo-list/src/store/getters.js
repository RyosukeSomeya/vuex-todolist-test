export default {
    getTodoList: (state) => {
        if (state.showStatus === 'done') {
            return state.todos.filter((todo) => todo.status === 'done');
        } else if (state.showStatus === 'wip') {
            return state.todos.filter((todo) => todo.status === 'wip');
        } else {
            return state.todos;
        }
    },
}
