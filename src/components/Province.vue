<template>
  <g :id="province">
    <Island v-for="path in paths" :key="path.id" :province="province" :fill="fill" :isHover="isHover" :path="path" @hover="isHover = true && isHoverable" @leave="isHover = false" />
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
  }
}
</script>
<style>
</style>
