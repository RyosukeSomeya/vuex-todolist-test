import { shallowMount } from '@vue/test-utils';
import TodoDisplay from '@/components/TodoDisplay';

describe('Testing TodoDisplay component', () => {
    let wrapper;
    const todoSample = [
        { comment: 'テストtodo1', state: 'wip' },
        { comment: 'テストtodo2', state: 'wip' },
        { comment: 'テストtodo3', state: 'done' },
    ];

    afterEach(() => {
        wrapper.destroy();
    });

    describe('Testing TodoDisplay component', () => {
        beforeEach(() => {
            wrapper = shallowMount(TodoDisplay)
        });

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
    });

    describe('Todoが存在する場合の表示状態の確認', () => {
        // todoが存在する場合
        it('各todoのコメントと状態が正しく表示されている', () => {
            wrapper = shallowMount(TodoDisplay, {
                propsData: {
                    showState: 'all',
                    todos: todoSample
                }
            });
            // ヘッダー行と合わせて4行のテーブルの存在確認
            // ラジオボタンの「すべて」が選択されている場合。
            expect(wrapper.findAll('tr').length).toEqual(4);
            // 作業中が2アイテム存在する。
            expect(wrapper.findAll('.wip-btn').length).toEqual(2);
            // 完了が1アイテム存在する。
            expect(wrapper.findAll('.done-btn').length).toEqual(1);
            // 各行に表示されているテキスト確認
            const rows = wrapper.findAll('tr');
            expect(rows.at(1).text()).toContain('テストtodo1');
            expect(rows.at(2).text()).toContain('テストtodo2');
            expect(rows.at(3).text()).toContain('テストtodo3');
        })

        it('ラジオボタンの「作業中」が選択されると作業中のtodoのみ表示される', () => {
            wrapper = shallowMount(TodoDisplay, {
                propsData: {
                    showState: 'wip',
                    todos: todoSample,
                }
            });

            wrapper.vm.$nextTick(() => {
                expect(wrapper.findAll('.wip-btn').length).toEqual(2);
            });
        });

        it('ラジオボタンの「完了」が選択されると完了のtodoのみ表示される', () => {
            wrapper = shallowMount(TodoDisplay, {
                propsData: {
                    showState: 'done',
                    todos: todoSample,
                }
            });

            wrapper.vm.$nextTick(() => {
                expect(wrapper.findAll('.done-btn').length).toEqual(1);
            });
        });
    });

    describe('クリックイベントの発火確認', () => {
        beforeEach(() => {
            wrapper = shallowMount(TodoDisplay, {
                propsData: {
                    showState: 'all',
                    todos: todoSample
                }
            });
        });

        it('状態ボタンをクリックすると状態変更イベントが発火する', () => {
            wrapper.find('.wip-btn').trigger('click');
            expect(wrapper.emitted('changeStateIndex')).toBeTruthy();
        });

        it('削除ボタンをクリックすると削除イベントが発火する', () => {
            wrapper.find('.delete-btn').trigger('click');
            expect(wrapper.emitted('deleteTodoIndex')).toBeTruthy();
        });
    })
});
