<template>
  <div class="info-box" :style="{ top: `${yPos}px`, left: `${xPos}px` }">
    <div>
      <span class=title-info>{{ title }}</span>
    </div>
    <div>
      <b><span>{{ content }} %</span></b>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProvinceInfo',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    xPos: {
      type: Number,
      required: true
    },
    yPos: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // isHover: false
    };
  },
  computed: {
    topValue() {
      return this.yPos
    },
    leftValue() {
      return this.xPos
    }
  }
}
</script>
<style lang="scss" scoped>
$primary: #851400;
$secondary: #FFBF00;
.info-box {
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: $primary;
  border-left: 2px solid $secondary;
  border-bottom: 2px solid $secondary;
  border-radius: 2px;
  padding: 6px;
  color: white;
}
.title-info {
  font-size: 18px;
}
</style>
