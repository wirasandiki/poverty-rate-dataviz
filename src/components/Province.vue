<template>
  <g :id="province">
    <Island v-for="path in paths" :key="path.id" :province="province" :fill="fill" :isHover="isHover" :path="path" @hover="isHover = true && isHoverable" @leave="isHover = false" @move="$emit('move', $event)"/>
  </g>
</template>

<script>
import Island from './Island.vue'

export default {
  name: 'province',
  components: {
    Island
  },
  props: {
    fill: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    paths: {
      type: Array,
      required: true
    },
    isHoverable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isHover: false
    };
  },
  watch: {
    isHover(val) {
      if (val) this.$emit('hover');
      else this.$emit('leave');
    }
  }
}
</script>
<style>
</style>
