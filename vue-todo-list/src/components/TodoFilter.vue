<template>
  <div class="select-state">
    <label for="all">
      <input type="radio" id="all" value="all" v-model="selectedState" />
      すべて
    </label>
    <label for="wip">
      <input type="radio" id="wip" value="wip" v-model="selectedState" />
      作業中
    </label>
    <label for="done">
      <input type="radio" id="done" value="done" v-model="selectedState" />
      完了
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoState: "all",
    };
  },
  computed: {
    selectedState: {
      get() {
        return this.todoState;
      },
      set(value) {
        this.todoState = value;
        this.$store.dispatch("selectStatus", value);
      },
    },
  },
};
</script>

<style scoped>
.select-state {
  margin-bottom: 2rem;
}
</style>
