<template>
  <div class="text-xs-center">
    <div>
      <div class="chart">
        <h2>{{title}}</h2>
        <LineChart
          :labels="labels"
          :data="data"
          :selectedIndex="selectedIndex" />
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";
export default {
  name: "LineChartContainer",
  components: {
    LineChart
  },
  props: {
    title: String,
    labels: Array,
    data: Array,
    selectedIndex: Number
  },
};
</script>

<style lang="scss" scoped>
$primary: #851400;
.chart {
  margin: 40px !important;
}
</style>
