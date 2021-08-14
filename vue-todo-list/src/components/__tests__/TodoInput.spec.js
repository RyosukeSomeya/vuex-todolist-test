import { shallowMount } from '@vue/test-utils';
import Vuex from "vuex"

import TodoInput from '@/components/TodoInput';

describe('Testing TodoInput component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(TodoInput);
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

        it('追加ボタンクリックでイベントが発火する', () => {
            // Todo追加ボタンの発火テスト
            wrapper.find('button').trigger('click');
            expect(wrapper.emitted('sendNewTodo')).toBeTruthy();
        });
    });
});
