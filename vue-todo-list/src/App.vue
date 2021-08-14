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
