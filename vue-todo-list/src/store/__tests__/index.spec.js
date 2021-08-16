import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import { cloneDeep } from 'lodash'
import actions from '@/store/actions.js'
import mutations from '@/store/mutations.js'

const state = {
    showStatus: 'all',
    todos: []
};

// beforeEachで毎回Storeを生成するために。
const initStore = () => {
    return cloneDeep({
        state,
        mutations,
        actions,
    })
}

let store;
let localVue;

describe('store action test', () => {
    // 実行可能なStoreを生成してテスト。
    beforeEach(() => {
        localVue = createLocalVue();
        localVue.use(Vuex);

        store = new Vuex.Store(
            initStore()
        );
    });

    it('dispatch addTodo', () => {
        // 初期状態
        expect(store.state.todos).toEqual([]);
        store.dispatch('addTodo', 'newTodo1');
        // 追加1
        expect(store.state.todos).toEqual([
            { comment: 'newTodo1', status: 'wip' }
        ]);
        // 追加2
        store.dispatch('addTodo', 'newTodo2');
        expect(store.state.todos).toEqual([
            { comment: 'newTodo1', status: 'wip' },
            { comment: 'newTodo2', status: 'wip' },
        ]);

    });

    it('dispatch changeTodoStatus', () => {
        store.dispatch('addTodo', 'newTodo1');
        store.dispatch('changeTodoStatus', 0);
        // 状態変更
        expect(store.state.todos).toEqual([
            { comment: 'newTodo1', status: 'done' }
        ]);

        // 状態再変更
        store.dispatch('changeTodoStatus', 0);
        expect(store.state.todos).toEqual([
            { comment: 'newTodo1', status: 'wip' }
        ]);
    });

    it('dispatch deleteTodo', () => {
        store.dispatch('addTodo', 'newTodo1');
        store.dispatch('addTodo', 'newTodo2');
        store.dispatch('deleteTodo', 0);
        // 削除確認
        expect(store.state.todos).toEqual([
            { comment: 'newTodo2', status: 'wip' }
        ]);
    });

    it('dispatch selectStatus', () => {
        // 初期状態
        expect(store.state.showStatus).toEqual('all');
        //「作業中」選択
        store.dispatch('selectStatus', 'wip');
        expect(store.state.showStatus).toEqual('wip');
        //「完了」選択
        store.dispatch('selectStatus', 'done');
        expect(store.state.showStatus).toEqual('done');
        //「すべて」選択
        store.dispatch('selectStatus', 'all');
        expect(store.state.showStatus).toEqual('all');
    });
});
