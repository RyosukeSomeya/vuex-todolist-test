import Vuex from 'vuex';
import TodoFilter from '../components/TodoFilter';
import { action } from '@storybook/addon-actions';

import actions from '../store/actions';
import mutations from '../store/mutations';

export default {
    title: 'TodoFilter',
    component: TodoFilter,
    argTypes: {
        selectState: 'all',
        // onChange: {
        //     action: 'selectStatus',
        // }
    },
}

const Template = () => ({
    components: { TodoFilter },
    template: `<TodoFilter /> `,
    store: new Vuex.Store({
        actions,
        mutations
    })
});

export const AllTodo = Template.bind({});
AllTodo.args = {
    selectState: 'all'
};

export const WipTodo = Template.bind({});
WipTodo.args = {
    selectState: 'wip'
};

export const DoneTodo = Template.bind({});
DoneTodo.args = {
    selectState: 'done'
};
