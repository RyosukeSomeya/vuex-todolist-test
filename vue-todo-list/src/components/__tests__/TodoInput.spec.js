import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoInput from '@/components/TodoInput';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoInputコンポーネント テスト', () => {
    let store;
    let actions;
    let wrapper;

    beforeEach(() => {
        // Vuexストアのモック作成
        // TodoDisplayコンポーネントで仕様するaction
        actions = {
            addTodo: jest.fn(),
        }
        store = new Vuex.Store({
            actions,
        })

        wrapper = shallowMount(TodoInput, { store, localVue });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    describe('コンポーネント全体の確認', () => {
        it('コンポーネントが表示されている', () => {
            expect(wrapper.isVueInstance).toBeTruthy();
            expect(wrapper.findComponent(TodoInput).exists()).toBe(true);
        });

        it('コンポーネントの各要素が表示されている', () => {
            expect(wrapper.find('h1').text()).toBe('新規タスクの追加');
            expect(wrapper.find('input[type="text"]').exists()).toBe(true);
            expect(wrapper.find('button').text()).toBe('追加');
        });
    });

    describe('コンポーネント全体の確認', () => {
        it('inputに入力したテキストが反映される', async () => {
            const textInput = wrapper.find('input[type="text"]');
            await textInput.setValue('追加タスク1');
            // v-modelの値が変更されていることを確認
            expect(wrapper.find('input[type="text"]').element.value).toBe('追加タスク1');
        });

        it('追加ボタンクリックで"addTodo"が呼ばれる', () => {
            // Todo追加ボタンの発火テスト
            wrapper.find('button').trigger('click');
            expect(actions.addTodo).toHaveBeenCalled();
        });
    });
});
