import App from './App.vue'
import Default from '@/layouts/default/Default.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import axios from 'axios'


import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
//import VueFeather from 'vue-feather';
import "bootstrap/dist/css/bootstrap.css";
const app = createApp(App)
//import FeatherIcon from '@core/components/feather-icon/FeatherIcon.vue'
import VueFeather from 'vue-feather';
import vSelect from "vue-select";


app.component('LayoutDefault', Default)
//app.component(VueFeather.name, VueFeather);
//app.component(FeatherIcon.name, FeatherIcon)
app.component(VueFeather.name, VueFeather);
app.component("v-select", vSelect);
app.component("axios", axios);

const options: PluginOptions = {
      hideProgressBar: true,
      closeOnClick: false,
      closeButton: false,
      icon: false,
      timeout: 3000,
      transition: 'Vue-Toastification__fade',
  // You can set your default options here
};

app.use(Toast,options);
app.use(createPinia())
app.use(router)
app.use(BootstrapVue3)

app.mount('#app')
//app.provide('$http', axios);
import "bootstrap/dist/js/bootstrap.js";

// below code is not effect
axios.interceptors.request.use(
    config => {
      //config.headers['Content-Type'] = 'application/json;charsetset=UTF-8';
      if (localStorage.getItem('x-auth-token')) {
        //config.headers['Authorization'] ="Bearer"+" " +localStorage.getItem('x-auth-token');
        config.headers['x-auth-token'] =localStorage.getItem('x-auth-token');
      }
      // if (localStorage.getItem('uid')) {
      //   config.headers['uid'] = localStorage.getItem('uid');
      // }
      return config;
    },
    error => {
      return Promise.reject(error);
    });
    axios.interceptors.response.use(
        response => {
          // 未登录，返回登录页
          if (response.data.error === "401") {
            router.push('/login');
          }
          return response
        },
        error => {
          if(error.response){
            if(error.response.status === 401){
              router.push('/login');
            }
          }
          return Promise.reject(error)
        }
    )
