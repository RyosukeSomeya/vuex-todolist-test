import TodoFilter from '../components/TodoFilter';
import Vuex from "vuex";
import actions from "../store/actions";
import mutations from "../store/mutations";


export default {
    title: 'TodoFilter',
    component: TodoFilter,
    argTypes: { change: { action: 'onChange' } },
}

const Template = () => ({
    components: { TodoFilter },
    template: `<TodoFilter /> `,
    store: new Vuex.Store({
        mutations,
        actions
    }),
});

export const SelectTodo = Template.bind({});

