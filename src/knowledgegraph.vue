<script>
import SparklineComponent from './components/SparklineComponent.vue';



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

<template>
    <h3 class="text-lg font-semibold w-full">Knowledge Graph</h3>
    <div id="scroll-target" class="scrollable-container">
        <div v-for="(title, index) in titles" :key="index" class="title">
            {{ title }}
        </div>
        <div>
            <SparklineComponent
                v-for="(value, index) in values"
                :key="index"
                class="sparkline-component"
                :fill="fill"
                :gradient="gradient"
                :line-width="values[index]"
                :model-value="value"
                :padding="padding"
                :smooth="smooth"
                :show-xaxis="true"
                auto-draw
            >
                <template v-slot:label="slotProps">
                    <div class="x-axis-label">${{ slotProps.label }}</div>
                </template>
            </SparklineComponent>
            </div>
            </div>
</template>



<style scoped>
.title {
    text-align: left;
    font-size: 20px;
}

.scrollable-container {
    width: 70%;
    height: 60%;
    padding-left: 10%;
    overflow-y: auto;
}
</style>
