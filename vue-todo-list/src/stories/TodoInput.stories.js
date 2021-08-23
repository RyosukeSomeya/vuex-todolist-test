import TodoInput from '../components/TodoInput';
import Vuex from "vuex";
import actions from "../store/actions";
import mutations from "../store/mutations";


export default {
    title: 'TodoInput',
    component: TodoInput,
}

const Template = () => ({
    components: { TodoInput },
    template: `<TodoInput /> `,
    store: new Vuex.Store({
        state: {
            todos: []
        },
        mutations,
        actions
    }),
});

export const InputTodoForm = Template.bind({});
