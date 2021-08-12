<template>
  <div class="add-task">
    <h1>新規タスクの追加</h1>
    <input type="text" v-model="inputValue">
    <button @click="sendNewTodo">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    sendNewTodo() {
        this.$emit('sendNewTodo', this.inputValue);
        this.inputValue = '';
    },
  }
}
</script>

<style scoped>
button {
  width: 80px;
}
input[type="text"] {
  width: 70%;
  padding: 4px;
  margin-right: 1rem;
}
</style>
