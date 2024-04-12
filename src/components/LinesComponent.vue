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
      :show-xaxis="true"
      auto-draw
    >
      <template v-slot:label="slotProps">
        <div class="x-axis-label">${{ slotProps.label }}</div>
      </template>
      
    </v-sparkline>
  </div>
</template>

<script>
import { VSparkline } from 'vuetify/labs/VSparkline'
export default {
  name: 'LinesComponent',
  props: {
    title: String,
    fill: Boolean,
    gradient: Array,
    lineWidth: Number,
    value: Array,
    padding: Number,
    smooth: Boolean,
  },
  components: {
    VSparkline,
  },
};
</script>

<style>
.text-center{
  padding-top: 2%;
  transform: scale(100%);
}

.sparkline-component {
  width: 70%;
  height: 50%;
  padding-left: 10%;
}

.x-axis-label {
  font-size: 0.8em;
  color: #999; /* Adjust color as needed */
}
</style>
