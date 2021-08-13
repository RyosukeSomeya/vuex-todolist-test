<template>
  <table>
    <thead>
      <tr>
        <th class="todo-it">ID</th>
        <th class="comment-col">コメント</th>
        <th>状態</th>
        <th class="no-bg"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, index) in getTodoList" :key="index">
        <td class="todo-index">{{ index }}</td>
        <td class="todo-comment">{{ todo.comment }}</td>
        <td v-if="todo.status === 'wip'">
          <button class="wip-btn" @click="changeTodoStatus(index)">
            作業中
          </button>
        </td>
        <td v-else>
          <button class="done-btn" @click="changeTodoStatus(index)">
            完了
          </button>
        </td>
        <td>
          <button class="delete-btn" @click="deleteTodo(index)">削除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getTodoList"]),
  },
  methods: {
    deleteTodo(index) {
      this.$store.dispatch("deleteTodo", index);
    },
    changeTodoStatus(index) {
      this.$store.dispatch("changeTodoStatus", index);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
}
th {
  color: #666;
  background-color: #ccc;
}
td {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}
.todo-id {
  width: 10%;
}
.comment-col {
  width: 50%;
}
.no-bg {
  background: none;
}
</style>
