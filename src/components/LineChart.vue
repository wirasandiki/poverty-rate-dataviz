<script>
import { Line } from "vue-chartjs";
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels';

export default {
  extends: Line,
  props: {
    labels: Array,
    data: Array,
    selectedIndex: Number
  },
  components: {
    ChartJsPluginDataLabels,
  },
  computed: {
    backgroundColor() {
      const colors = [];
      for (let i = 0; i < this.data.length; i++) {
        colors.push(i === this.selectedIndex ? '#FFBF00' : '#851400');
      }
      return colors;
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: this.labels,
        datasets: [
          {
            label: 'Persentase kemiskinan (%)',
            borderColor: '#851400',
            backgroundColor: this.backgroundColor,
            fill: false,
            lineTension : 0,
            borderWidth: 1,
            pointBorderWidth: 2,
            pointRadius: 6,
            data:this.data,
            datalabels: {
              color: '#851400',
              anchor: 'end',
              align: 'end',
              display: 'auto',
              offset: 2,
              clamp: true
            }
          }
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            right: 20,
            top: 30
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              drawBorder: false
            },
            ticks: {
              fontColor: '#851400'
            }
          }],
          yAxes: [{
            gridLines: {
              drawBorder: false
            },
            ticks: {
              fontColor: '#851400',
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        }
      }
    )
  },
};
</script>
