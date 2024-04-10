<template>
  <div class="carousel-item relative w-full h-full">
    <SparklineComponent
      title="Overall Engagement"
      :fill="fill"
      :gradient="selectedGradient"
      :line-width="lineWidth"
      :value="overallEngagement"
      :padding="padding"
      :smooth="smooth"
    />
  </div>
</template>

<script>
import SparklineComponent from './components/SparklineComponent.vue'
export default {
  name: 'App',
  components: {
    SparklineComponent

  },
  data(){
    return {
      // ENGAGEMENT DATA - IDEALLY THIS IS POPULATED FROM FIREBASE
      overallEngagement: [0, 2, 5, 9, 5, 10, 9, 9, 9, 0, 1, 8, 2, 9, 0],

      fill: false,
      selectedGradient: ['#6fa8dc', '#42b983', '#2c3e50'],
      lineWidth: 2,
      padding: 8,
      smooth: true,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
