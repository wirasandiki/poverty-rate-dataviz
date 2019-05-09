<template>
  <div>
    <span class="item-color" :style="{ backgroundColor: color }">&nbsp;</span>
    <span class="item-desc">{{ from }} - {{ to }}</span>
  </div>
</template>

<script>
export default {
  name: 'Legend',
  props: {
    color: {
      type: String,
      required: true
    },
    from: {
      type: Number,
      required: true
    },
    to: {
      type: Number,
      required: true
    }
  }
}
</script>
<style>
.item-color {
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-bottom: 1px;
  margin-right: 10px;
}
.item-desc {
  color: #851400;
  vertical-align: middle;
  font-size: 12px;
}
</style>
