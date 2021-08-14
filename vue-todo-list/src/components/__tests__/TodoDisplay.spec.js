import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoDisplay from '@/components/TodoDisplay';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoDisplayコンポーネント テスト', () => {
    let store;
    let actions;
    let getters;
    let wrapper;

    beforeEach(() => {
        // Vuexストアのモック作成
        // TodoDisplayコンポーネントで仕様するaction
        actions = {
            deleteTodo: jest.fn(),
            changeTodoStatus: jest.fn(),
        }
        getters = {
            showStatus: () => 'all',
            getTodoList: () => [
                { comment: 'テストtodo1', status: 'wip' },
                { comment: 'テストtodo2', status: 'wip' },
                { comment: 'テストtodo3', status: 'done' },
            ],
        }
        store = new Vuex.Store({
            actions,
            getters
        })

        wrapper = shallowMount(TodoDisplay, { store, localVue });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    describe('DOM表示確認', () => {
        it('コンポーネントが表示されている', () => {
            expect(wrapper.isVueInstance).toBeTruthy();
            expect(wrapper.findComponent(TodoDisplay).exists()).toBe(true);
        });

        // 初期表示の確認
        it('tableのtheadが表示されている', () => {
            expect(wrapper.find('thead').exists()).toBeTruthy();
            // thは4つ存在する
            expect(wrapper.findAll('th').length).toEqual(4);
            // クラス名ｓ'todo-it'と'comment-col'の
            expect(wrapper.find('.todo-it').exists()).toBeTruthy();
            expect(wrapper.find('.comment-col').exists()).toBeTruthy();
        });
        // データの状態確認
        it('モック通りのデータが表示されている', () => {
            // todoは3つ
            const todoLow = wrapper.findAll('.todo-comment');
            expect(todoLow.length).toEqual(3);
            expect(todoLow.at(0).text()).toBe('テストtodo1');
            expect(todoLow.at(1).text()).toBe('テストtodo2');
            expect(todoLow.at(2).text()).toBe('テストtodo3');
            // Todoリストは作業中2つ、完了1つ
            expect(wrapper.findAll('.wip-btn').length).toEqual(2);
            expect(wrapper.findAll('.done-btn').length).toEqual(1);
        });
    });

    describe('アクション呼び出し確認', () => {
        it('todo削除時,"deleteTodo"が呼ばれている', () => {
            const deleteBtn = wrapper.find('.delete-btn');
            deleteBtn.trigger('click');
            expect(actions.deleteTodo).toHaveBeenCalled();
        });

        it('Todoの"作業中ボタン"クリック時,"changeTodoStatus"が呼ばれている', () => {
            const changeStatusBtn = wrapper.find('.wip-btn');
            changeStatusBtn.trigger('click');
            expect(actions.changeTodoStatus).toHaveBeenCalled();
        });

        it('Todoの"完了ボタン"クリック時,"deleteTodo"が呼ばれている', () => {
            const deleteBtn = wrapper.find('.delete-btn');
            deleteBtn.trigger('click');
            expect(actions.deleteTodo).toHaveBeenCalled()
        });
    });

});
