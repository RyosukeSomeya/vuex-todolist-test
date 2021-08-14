import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoFilter from '@/components/TodoFilter';
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TodoFilterコンポーネント テスト', () => {
    let store;
    let actions;
    let wrapper;

    beforeEach(() => {
        // Vuexストアのモック作成
        // TodoDisplayコンポーネントで仕様するaction
        actions = {
            selectStatus: jest.fn(),
        }
        store = new Vuex.Store({
            actions,
        })

        wrapper = shallowMount(TodoFilter, { store, localVue });
    });

    afterEach(() => {
        wrapper.destroy();
    });

    describe('コンポーネント全体の確認', () => {
        it('コンポーネントが表示されている', () => {
            expect(wrapper.isVueInstance).toBeTruthy();
            expect(wrapper.findComponent(TodoFilter).exists()).toBe(true);
        });

        it('コンポーネントの各要素の表示されている', () => {
            const labels = wrapper.findAll('label');
            expect(labels.at(0).text()).toBe('すべて');
            expect(labels.at(1).text()).toBe('作業中');
            expect(labels.at(2).text()).toBe('完了');
        });
    });

    describe('ラジオボタンの選択状態確認', () => {
        let radioInput;
        beforeEach(() => {
            radioInput = wrapper.findAll('input[type="radio"]');
            expect(radioInput.length).toBe(3);
        })

        it('「すべて」が選択時、"selectStatus"が呼ばれる', async () => {
            await radioInput.at(0).trigger('change');
            expect(actions.selectStatus).toHaveBeenCalled();
            // 表示状態確認
            expect(radioInput.at(0).element.checked).toBe(true);
            expect(radioInput.at(1).element.checked).toBe(false);
            expect(radioInput.at(2).element.checked).toBe(false);
            expect(radioInput.at(0).element.value).toBe('all');
        });

        it('「作業中」が選択時、"selectStatus"が呼ばれる', async () => {
            await radioInput.at(1).trigger('change');
            expect(actions.selectStatus).toHaveBeenCalled();
            // 表示状態確認
            expect(radioInput.at(0).element.checked).toBe(false);
            expect(radioInput.at(1).element.checked).toBe(true);
            expect(radioInput.at(2).element.checked).toBe(false);
            expect(radioInput.at(1).element.value).toBe('wip');
        });



        it('「完了」が選択時、"selectStatus"が呼ばれる', async () => {
            await radioInput.at(2).trigger('change');
            expect(actions.selectStatus).toHaveBeenCalled();
            // 表示状態確認
            expect(radioInput.at(0).element.checked).toBe(false);
            expect(radioInput.at(1).element.checked).toBe(false);
            expect(radioInput.at(2).element.checked).toBe(true);
            expect(radioInput.at(2).element.value).toBe('done');
        });
    });
});
