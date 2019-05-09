<template>
  <div class="text-xs-center">
    <v-dialog v-model="shown" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2">
          <span primary-title>Tren Persentase Kemiskinan (%)</span>
          <v-spacer></v-spacer>
          <v-btn slot="activator" @click="shown = false" icon>
            <v-icon color="white">close</v-icon>
          </v-btn>
        </v-card-title>
        <line-chart-container 
          :title="title"
          :labels="labels"
          :data="data"
          :selectedIndex="selectedIndex"
          :key="shown"/>
        <v-divider></v-divider>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import LineChartContainer from "./LineChartContainer.vue";

export default {
  name: "ChartDialog",
  components: {
    LineChartContainer
  },
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      default: () => []
    },
    selectedIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      shown: false,
      labels: [
        "2012 (Maret)",
        "2012 (September)",
        "2013 (Maret)",
        "2013 (September)",
        "2014 (Maret)",
        "2014 (September)",
        "2015 (Maret)",
        "2015 (September)",
        "2016 (Maret)",
        "2016 (September)",
        "2017 (Maret)",
        "2017 (September)",
        "2018 (Maret)",
        "2018 (September)"
      ]
    };
  },
  watch: {
    show(val) {
      if (val) this.shown = true;
    },
    shown(val) {
      if (!val) this.$emit('close');
    }
  },
};
</script>
<style lang="scss" scoped>
$primary: #851400;
$secondary: #FFBF00;
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.v-card__title {
  background-color: $primary !important;
  color: white !important;
}
</style>
