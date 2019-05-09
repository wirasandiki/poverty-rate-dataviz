<template>
  <div class="text-xs-center">
    <div>
      <div class="chart">
        <h2>Provinsi {{title}}</h2>
        <LineChart
          :labels="labels"
          :data="data" />
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
    data: Array
  },
};
</script>

<style scoped>
.chart {
  margin: 10px 
}
</style>
