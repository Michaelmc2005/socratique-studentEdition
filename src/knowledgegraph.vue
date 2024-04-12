<template>
    <h3 class="text-lg font-semibold w-full">Knowledge Graph</h3>
    <div id="scroll-target" class="scrollable-container">
      <div class="flex-container">
        <div class="titles">
          <div v-for="(title, index) in titles" :key="'title-' + index" class="title">
            {{ title }}
          </div>
        </div>
        <div class="lines">
          <div v-for="(value, index) in values" :key="'line-' + index" class="line">
            <hr :style="{ width: value * 10 + '%' }" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'KnowledgeGraph',
    data() {
      return {
        titles: ['Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'],
        values: [1, 2, 6, 4, 5]
      }
    }
  }
  </script>
  

<style scoped>

.flex-container {
  display: flex;
  flex-direction: column;
}
.titles{
    max-width: fit-content;
}


.title {
  text-align: left;
  font-size: 20px;
}

hr {
  height: 1px;
  background-color: black;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
}

.scrollable-container {
  width: 70%;
  height: 60%;
  overflow-y: auto; /* Add this line to enable scrolling */
}
</style>
 