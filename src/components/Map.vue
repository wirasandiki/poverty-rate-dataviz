<template>
  <div id="maps">
    <svg id="svg-map" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="297mm" height="210mm" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 29700 21000" xmlns:xlink="http://www.w3.org/1999/xlink">
      <Province v-for="data in masterData" :key="data.id" :fill="colorByValue(data.value[index])" :province="data.name" :paths="data.paths" />
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
  </div>
</template>

<script>
import Province from './Province.vue'
import { mapState } from 'vuex'

import svgPanZoom from 'svg-pan-zoom'

export default {
  name: 'maps',
  components: {
    Province
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
      panX: null,
      panY: null,
      zoom: null
    };
  },
  computed: {
    ...mapState(['masterData', 'outlierData'])
  },
  mounted() {
    this.panZoomInstance = svgPanZoom('#svg-map', {
      onPan: (event) => {
        if (!this.panX) {
          if (this.zoom) this.panX = event.x/this.zoom;
          else this.panX = event.x
        }
        if (!this.panY) {
          if (this.zoom) this.panY = event.y/this.zoom;
          else this.panY = event.y
        }
      },
      onZoom: (event) => {
        this.zoom = event;
        console.log(this.zoom)
      },
      mouseWheelZoomEnabled: false,
      dblClickZoomEnabled: false,
      maxZoom: 5
    })
    this.panZoomInstance.setMinZoom(1.8);
    this.panZoomInstance.zoom(1.8);
    this.zoom = null;
  },
  methods: {
    reset() {
      this.panZoomInstance.resetZoom();
      if (this.panX && this.panY) this.panZoomInstance.pan({x: this.panX, y: this.panY});
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
