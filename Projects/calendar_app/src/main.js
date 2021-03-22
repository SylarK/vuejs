import { createApp } from 'vue';
//import App from './app/App.vue';
import NumberDisplay from './app/examples/NumberDisplay.vue';
//import App from './app/MyComponent.vue';

//createApp(App).mount('#app');
createApp(NumberDisplay).mount('#app');

/*
Important - For study :

A single-file component consists of three parts:
• <template> which contains the component’s markup in plain HTML
• <script> which exports the component object constructor that consists of all the JS logic within
that component
• <style> which contains all the component styles

*/
