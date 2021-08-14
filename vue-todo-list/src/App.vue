<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <h1>TodoList</h1>
      <TodoFilter />
      <div class="todo-list">
        <TodoDisplay />
        <TodoInput />
      </div>
    </div>
  </div>
</template>

<script>
import TodoFilter from "./components/TodoFilter";
import TodoDisplay from "./components/TodoDisplay";
import TodoInput from "./components/TodoInput";

export default {
  name: "App",
  components: {
    TodoFilter,
    TodoDisplay,
    TodoInput,
  },
  // methods: {
  //   addTodo(inputValue) {
  //     this.todos.push({
  //       comment: inputValue,
  //       state: "wip",
  //     });
  //   },
  //   changeShowState(selectState) {
  //     this.showState = selectState;
  //   },
  //   deleteTodo(index) {
  //     this.todos.splice(index, 1);
  //   },
  //   changeState(index) {
  //     if (this.todos[index].state === "wip") {
  //       this.todos[index].state = "done";
  //     } else {
  //       this.todos[index].state = "wip";
  //     }
  //   },
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  width: 60%;
  margin: 0 auto;
}
</style>
