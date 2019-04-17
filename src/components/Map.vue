<template>
  <div id="maps">
    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="297mm" height="210mm" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 29700 21000" xmlns:xlink="http://www.w3.org/1999/xlink">
      <Province v-for="data in masterData" :key="data.id" :fill="data.fill" :province="data.name" :paths="data.paths" />
      <Province :fill="outlierData.fill" :province="outlierData.name" :paths="outlierData.paths" :isHoverable="false"/>
    </svg>
  </div>
</template>

<script>
import Province from './Province.vue'
import { mapState } from 'vuex'

export default {
  name: 'maps',
  components: {
    Province
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['masterData', 'outlierData'])
  }
}
</script>
<style scoped>
#map {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
