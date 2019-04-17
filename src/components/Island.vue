<template>
  <path @mouseover="$emit('hover')" @mouseleave="$emit('leave')" :style="isHover ? hoverStyle : {}" :fill="fill" :d="path"/>
</template>

<script>
export default {
  name: 'island',
  props: {
    fill: {
      type: String,
      required: true
    },
    isHover: {
      type: Boolean,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      hoverStyle: {
        stroke: "#002868 !important",
        strokeWidth: "2px",
        strokeLinejoin: "round",
        fill: "#002868 !important",
        cursor: "pointer"
      }
    };
  }
}
</script>
<style>
</style>
