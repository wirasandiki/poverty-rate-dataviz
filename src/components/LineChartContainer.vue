<template>
  <div class="text-xs-center">
    <div class="Chart__list">
      <div class="Chart">
        <h2>{{title}}</h2>
        <line-example 
          :labels="labels"
          :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
import LineExample from "./LineChart.js";
export default {
  name: "LineChartContainer",
  components: {
    LineExample
  },
  props: {
    title: String,
    labels: Array,
    data: Array
  },
};
</script>

<style scoped>
.Chart {
  margin: 10px 
}
</style>