import { createApp } from 'vue';
import App from './App.vue';
import { createVuetify } from 'vuetify';


const app = createApp(App);

const vuetify = createVuetify(); // Call createVuetify as a function

app.use(vuetify); // Use the result of createVuetify
app.mount('#app');
