<template>
  <div class="text-xs-center">
    <v-dialog v-model="shown" width="700">
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Tren kemiskinan</v-card-title>
        <line-chart-container 
          id="simulate-button"
          title="Provinsi Jawa Tengah"
          :labels="labels"
          :data="data"
          :key="shown"/>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn class="button-confirm" color="primary" flat @click="shown = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn color="info" @click="shown = !shown">Trigger Dialog</v-btn>
  </div>
</template>

<script>
import LineChartContainer from "./LineChartContainer.vue";
export default {
  name: "HelloWorld",
  components: {
    LineChartContainer
  },
  data: () => ({
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
        ],
    data: [
              11.96,
              11.66,
              11.37,
              11.47,
              11.25,
              10.96,
              11.22,
              11.13,
              10.86,
              10.7,
              10.64,
              10.12,
              9.82,
              9.66
            ]
  }),
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
