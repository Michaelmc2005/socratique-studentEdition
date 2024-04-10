<!-- SparklineComponent.vue -->
<template>
  <div class="text-center mt-8">
    <h3 class="text-lg font-semibold w-full">{{ title }}</h3>
    <v-sparkline class="sparkline-component"
      :fill="fill"
      :gradient="gradient"
      :line-width="lineWidth"
      :model-value="value"
      :padding="padding"
      :smooth="smooth"
      auto-draw
    ></v-sparkline>
  </div>
</template>

<script>
import { VSparkline } from 'vuetify/labs/VSparkline'
export default {
  name: 'SparklineComponent',
  props: {
    // takes in these values from app.vue when it is called
    title: String,
    fill: Boolean,
    gradient: Array,
    lineWidth: Number,
    value: Array,
    padding: Number,
    smooth: Boolean,
  },
  mounted(){
      console.log("Sparkline Data:", this.value);

  },
  components: {
      VSparkline,
  },
};
</script>

<style>

.text-center{
  padding-top: 2%;
  transform: scale(150%);

  
}
.sparkline-component {
  width: 100%;
  height: 50%;
}
</style>
