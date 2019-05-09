<template>
  <div class="info-box" :style="{ top: `${yPos}px`, left: `${xPos}px` }">
    <div>
      <span class=title-info>{{ title }}</span>
    </div>
    <div>
      <span>{{ content }} %</span>
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

.info-box {
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-color: #ffffff;
  border: 2px solid #BF0A30;
  border-radius: 2px;
  padding: 6px;
  color: $primary;
}
.title-info {
  font-size: 18px;
}
</style>
