import TodoDisplay from '../components/TodoDisplay';
import Vuex from "vuex";
import actions from "../store/actions";
import mutations from "../store/mutations";
import getters from "../store/getters";


export default {
    title: 'TodoDisplay',
    component: TodoDisplay,
}

const Template = () => ({
    components: { TodoDisplay },
    template: `<TodoDisplay /> `,
    store: new Vuex.Store({
        state: {
            showStatus: 'all',
            todos: [
                { comment: "todo1", status: "wip" },
                { comment: "todo2", status: "wip" },
                { comment: "todo3", status: "done" },
            ],
        },
        mutations,
        actions,
        getters
    }),
});

export const TodoList = Template.bind({});
