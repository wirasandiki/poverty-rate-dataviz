<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: {
    labels: Array,
    data: Array
  },
  mounted() {
    this.renderChart(
      {
        labels:this.labels,
        datasets: [
          {
            label: "Persentase kemiskinan",
            borderColor: "#851400",
            fill: false,
            lineTension : 0,
            borderWidth: 1,
            pointBorderWidth: 5,
            data:this.data
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [ { gridLines: { display: false } } ]
        },
        legend: {
          display: false
        }
      }
    )
  },
};
</script>
