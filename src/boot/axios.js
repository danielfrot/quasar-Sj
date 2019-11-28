import Vue from 'vue'
import axios from 'axios'

const HTTPApi = axios.create({
  baseURL: process.env.API
})

Vue.prototype.$axios = axios

export { HTTPApi }
