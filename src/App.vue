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
    <div id ="feedback" class="carousel-item">
      <h3>What you did well:</h3>
      <ul v-for="feedback in goodFeedbackArray" :key="feedback">{{ feedback }}</ul>
      <h3>What you need to work on:</h3>
      <ul v-for="feedback in constructiveFeedbackArray" :key="feedback">{{ feedback }}</ul>
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
  padding-left: 5%;
  height: 50%;
}
.parent-div2 {
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  height: 50%;
}
.carousel-item {
  flex: 1;
  list-style: none;
  padding-left: 0;
  text-align: left;
  height: 50%;
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
      goodFeedbackArray: ['You were very engaged', 'You asked good questions', 'You were very focused'],
      constructiveFeedbackArray: [`You could have asked more questions`, `You could have been more focused`, `You could have been more engaged`],
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
