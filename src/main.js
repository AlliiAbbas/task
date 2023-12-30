import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import store from "./store/store";
import router from "@/router";


createApp(App).use(store).use(router).mount('#app')
