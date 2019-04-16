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
            label: "Data One",
            borderColor: "red",
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
