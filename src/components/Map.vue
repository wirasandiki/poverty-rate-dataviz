<template>
  <div id="maps">
    <svg id="svg-map" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="297mm" height="210mm" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 29700 21000" xmlns:xlink="http://www.w3.org/1999/xlink">
      <Province v-for="data in masterData" :key="data.id" :fill="colorByValue(data.value[index])" :province="data.name" :paths="data.paths" @hover="hoverProvince(data.fullname, data.value[index], data.value)" @leave="leaveProvince" @move="mouseMove($event)" @click.native="openDialog"/>
      <Province :fill="outlierData.fill" :province="outlierData.name" :paths="outlierData.paths" :isHoverable="false"/>
    </svg>
    <div class="controller-bg">
      <div @click="panZoomInstance.zoomIn()" class="controller-icon-bg"></div>
      <div @click="panZoomInstance.zoomOut()" class="controller-icon-bg"></div>
      <div @click="reset" class="controller-icon-bg"></div>
    </div>
    <div class="controller">
      <img @click="panZoomInstance.zoomIn()" class="controller-icon" src="./../assets/add.png">
      <img @click="panZoomInstance.zoomOut()" class="controller-icon" src="./../assets/minus.png">
      <img @click="reset" class="controller-icon" src="./../assets/reset.png">
    </div>
    <ProvinceInfo v-if="showProvinceInfo" :title="provinceInfoTitle" :content="provinceInfoContent" :xPos="provinceInfoXPos" :yPos="provinceInfoYPos" ref="provinceInfo"/>
    <ChartDialog :show="isShowDialog" :title="provinceInfoTitle" :data="chartData" @close="isShowDialog = false"/>
  </div>
</template>

<script>
import Province from './Province.vue'
import ProvinceInfo from './ProvinceInfo.vue'
import ChartDialog from './ChartDialog.vue'
import { mapState } from 'vuex'

import svgPanZoom from 'svg-pan-zoom'

export default {
  name: 'maps',
  components: {
    Province,
    ProvinceInfo,
    ChartDialog
  },
  props: {
    index: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      panZoomInstance: null,
      initPan: null,
      initZoom: null,
      provinceInfoTitle: '',
      provinceInfoContent: '',
      showProvinceInfo: false,
      provinceInfoXPos: 0,
      provinceInfoYPos: 0,
      isShowDialog: false,
      chartData: []
    };
  },
  computed: {
    ...mapState(['masterData', 'outlierData'])
  },
  mounted() {
    this.panZoomInstance = svgPanZoom('#svg-map');
    this.panZoomInstance.setMinZoom(1.8);
    this.panZoomInstance.zoom(1.8);
    this.initPan = this.panZoomInstance.getPan();
    this.initZoom = this.panZoomInstance.getZoom();
  },
  methods: {
    reset() {
      this.panZoomInstance.zoom(this.initZoom);
      this.panZoomInstance.pan(this.initPan);
    },
    colorByValue(value) {
      if (this.index !== -1) {
        if (value >= 0 && value < 4) {
          return '#FFBF00'
        } else if (value >= 4 && value < 8) {
          return '#EB9900'
        } else if (value >= 8 && value < 12) {
          return '#D67600'
        } else if (value >= 12 && value < 16) {
          return '#C25700'
        } else if (value >= 16 && value < 20) {
          return '#A33900'
        } else if (value >= 20 && value < 24) {
          return '#992600'
        } else if (value >= 24) {
          return '#851400'
        }
      }
      return '#FFF'
    },
    hoverProvince(province, value, data) {
      this.provinceInfoTitle = province;
      this.provinceInfoContent = value.toString();
      this.showProvinceInfo = true;
      this.chartData = data;
    },
    leaveProvince() {
      this.showProvinceInfo = false;
    },
    mouseMove(mouseEventObj) {
      this.provinceInfoYPos = mouseEventObj.layerY - 60;
      this.provinceInfoXPos = mouseEventObj.layerX;
    },
    openDialog() {
      this.isShowDialog = true;
    }
  }
}
</script>
<style scoped>
#maps {
  width: 80%;
  margin-left: 260px;
  margin-top: 70px;
  position: relative;
}
svg {
  width: 100%;
  height: 400px;
  cursor: -webkit-grab;
}
svg:active {
  cursor: -webkit-grabbing;
}
.controller {
  position: absolute;
  right: 5px;
  bottom: 0;
}
.controller-icon {
  width: 24px;
  display: inline-block;
  margin-right: 5px;
  border-radius: 10%;
  background-color: white;
}
.controller-icon:hover {
  cursor: pointer;
}
.controller-bg {
  position: absolute;
  right: 3px;
  bottom: -2px;
}
.controller-icon-bg {
  z-index: 2;
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 5px;
  border-radius: 10%;
  background-color: #FFBF00;
}
.controller-icon-bg:hover {
  cursor: pointer;
}
</style>
