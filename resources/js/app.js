require('./bootstrap');

import { createApp } from 'vue'
// import Home from './components/Home.vue';
import Main from './components/employee/Main.vue';
//Toaster 1
import Toaster from "@meforma/vue-toaster";

const app = createApp({});

// app.component('home', Home);
app.component('employee-main', Main);

app.mount('#app');
//Toaster 2
app.use(Toaster, {
    //top, bottom, top-right, bottom-right,top-left, bottom-left
    position: "top",
  });