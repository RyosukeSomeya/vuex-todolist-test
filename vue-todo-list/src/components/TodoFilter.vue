<template>
  <div class="select-state">
    <label for="all">
      <input
        type="radio"
        id="all"
        value="all"
        v-model="selectState"
        v-on:change="onChange"
      />
      すべて
    </label>
    <label for="wip">
      <input
        type="radio"
        id="wip"
        value="wip"
        v-model="selectState"
        v-on:change="onChange"
      />
      作業中
    </label>
    <label for="done">
      <input
        type="radio"
        id="done"
        value="done"
        v-model="selectState"
        v-on:change="onChange"
      />
      完了
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectState: "all",
    };
  },
  methods: {
    onChange(event) {
      this.$store.dispatch("selectStatus", event.target.value);
    },
  },
};
</script>

<style scoped>
.select-state {
  margin-bottom: 2rem;
}
</style>
