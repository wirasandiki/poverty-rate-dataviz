<template>
  <div id="app">
    <div class="heading">
      <div class="title-container">
        <h1>Persentase Penduduk <span class="bold">Miskin</span> Indonesia</h1>
      </div>
      <div class="subtitle-container">
        <h2>Menurut Provinsi Tahun 2012-2018</h2>
      </div>
    </div>
    <div class="map-container">
      <Map :index="activeIndex"/>
    </div>
    <div class="slider-container">
      <vue-slider
        v-model="timeSliderValue"
        :dotSize="24"
        :height="7"
        :data="sliderData"
        :marks = "markSlider"
        :process="false"
        :railStyle="railStyle"
        :dotStyle="dotStyle"
        @change="changeIndex($event)"
      >
      </vue-slider>
    </div>
    <img src="./assets/human.png" class="human-image">
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Map from './components/Map.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  name: 'App',
  components: {
    Map,
    VueSlider
  },
  data() {
    return {
      activeIndex: 13,
      timeSliderValue: 'September 2018',
      railStyle: { borderRadius: '0' },
      dotStyle: { backgroundColor: '#FFBF00' }
    };
  },
  computed: {
    ...mapState(['sliderData']),
    markSlider() {
      const marks = {}
      for (const s of this.sliderData) {
        marks[s] = {
          label: `${s.substr(0, 3)} ${s.substr(s.length - 4, s.length)}`,
          style: {
            backgroundColor: '#851400',
            borderRadius: '10%',
            width: '5px',
            height: '10px',
            left: '4px',
            top: '-1px',
            boxShadow: '0 0 0 2px #851400',
            cursor: 'pointer'
          },
          labelStyle: {
            fontFamily: 'sans-serif',
            color: '#851400',
            cursor: 'pointer'
          }
        }
      }
      return marks
    }
  },
  methods: {
    changeIndex(e) {
      this.activeIndex = this.sliderData.indexOf(e);
    }
  }
}
</script>

<style lang="scss">
/* Set the theme color of the component */
$primary: #851400;
$secondary: #FFBF00;
$bgColor: $primary;
$bgColorSilent: $primary;
$themeColor: $primary;
$tooltipBgColor: $primary;
/* import theme style */
@import '~vue-slider-component/lib/theme/antd.scss';
html {
  background-color: #FFF6E5;
}
#app {
  font-family: Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif;
}
h1 {
  font-weight: 200;
  font-size: 30px;
  display: block;
  margin: 0;
  color: #fff;
}
h2 {
  font-weight: 200;
  font-size: 20px;
  display: block;
  margin-bottom: 0;
  margin-top: 0;
  color: $primary;
}
.bold {
  font-weight: 900;
}
.heading {
  position: relative;
  margin-bottom: 3rem;
  margin-top: 30px;
}
.title-container {
  position: absolute;
  background-color: $primary;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 50px;
  width: 650px;
  left: -10px;
  z-index: 1;
}
.subtitle-container {
  top: 57px;
  left: -10px;
  position: relative;
  background-color: $secondary;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 50px;
  margin-right: 550px;
  width: 400px;
}
.vue-slider {
  width: 100%;
  left: 0;
}
.slider-container {
  margin-top: 30px;
  // margin-left: auto;
  // margin-right: auto;
  margin-left: 460px;
  width: 60%;
}
.human-image {
  position: absolute;
  width: 400px;
  bottom: 0;
  z-index: -9;
  // opacity: 0.7;
  // filter: alpha(opacity=70);
}
</style>
