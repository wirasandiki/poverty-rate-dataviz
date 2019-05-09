<template>
  <div class="textbox">
    <div class="textbox-front">
      <p class="textbox-title">Kemiskinan di Indonesia </p>
      <div class="left">
        <span>{{ content.split(' ')[0] }}</span>
        <br>
        <span>{{ content.split(' ')[1] }}</span>
      </div>
      <p class="right">{{ value }}<span class="percent">%</span></p>
    </div>
    <div class="textbox-back"></div>
  </div>
</template>

<script>
export default {
  name: 'Textbox',
  props: {
    content: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
$primary: #851400;
$secondary: #FFBF00;
.textbox {
  position: relative;
  color: white;
  width: 90%;
}
.textbox-front {
  padding: 10px;
  position: absolute;
  background-color: $primary;
  z-index: 2;
  width: 210px;
  height: 90px;
  right: 0;
  top: -100px;
}
.textbox-back {
  position: absolute;
  background-color: $secondary;
  z-index: 1;
  top: -90px;
  right: 10px;
  width: 210px;
  height: 90px;
}
.textbox-front:hover,
.textbox-back:hover {
  cursor: pointer;
}
.textbox-title {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: bold;
}
.left {
  margin-top: 3px;
  float: left;
  font-size: 15px;
  width: 40%;

}
.right {
  float: right;
  font-size: 35px;
  font-weight: bold;
}
.percent {
  font-size: 20px;
}
</style>
