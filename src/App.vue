<template>
  <div class="parent-div1">
    <div class="carousel-item">
      <Knowledgegraph></Knowledgegraph>
      
    </div>
    
    
    <div class="carousel-item">
      <SparklineComponent
        title="Engagement"
        :fill="fill"
        :gradient="selectedGradient"
        :line-width="lineWidth"
        :value="overallEngagement"
        :padding="padding"
        :smooth="smooth"
        :show-xaxis="true"
      />
      
      
    </div>
    
    </div>
    <div class = "parent-div2">
    <div class="carousel-item">
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
    <div class="carousel-item">
      <SparklineComponent
        title="Understanding"
        :fill="fill"
        :gradient="selectedGradient"
        :line-width="lineWidth"
        :value="overallEngagement"
        :padding="padding"
        :smooth="smooth"
      />
      
    </div>
  </div>
  
</template>
<style scoped>
.parent-div1 {
  display: flex;
  flex-direction: row;
  height: 50vh;
}
.parent-div2 {
  display: flex;
  flex-direction: row;
  height: 50vh;
}
.carousel-item {
  flex: 1;
}

</style>
<script>
import SparklineComponent from './components/SparklineComponent.vue'
import Knowledgegraph from './knowledgegraph.vue';
export default {
  name: 'App',
  components: {
    SparklineComponent,
    Knowledgegraph

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
