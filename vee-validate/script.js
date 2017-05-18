//var Vue = require('vue');
//var VeeValidate = require('vee-validate');
import Vue from 'vue/dist/vue.js';
import VeeValidate from 'vee-validate/dist/vee-validate.js';

Vue.use(VeeValidate);

var data = {
    title: "vee-validate"
};

new Vue({
    el: '#app',
    data: data
});
