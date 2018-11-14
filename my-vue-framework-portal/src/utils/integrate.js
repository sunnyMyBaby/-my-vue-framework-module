// 集成资源
import Vue from 'vue'
import router from '@/utils/router.utils'
import store from '@/store'
import './integrate'
import layout from '../layout/layout'
// 注册异步路由方法
// asyncRoutes [{component:...,meta: {...},path:...,children:{...}}]
// parentNav 父级导航比如说倒出来的moduleA了里边包含了search，regester...等模块那么这写子模块都是moduleA的子模块
// moduleName
const registerAsyncRouter = (asyncRoutes, parentNav, moduleName)=>{
  let parentName = parentNav;
  asyncRoutes.forEach((route) => {
    // 给每个组件添加meta便于SEO？
    route.component = layout
    route.meta = {
      parent: parentName,
      moduleName
    }
    route.path = `/${parentName}${route.path}`
  });
  router.addRoutes(asyncRoutes)
}
// 注册异步storeModule
const registerStore = (storeConfig)=>{
  Object.keys(storeConfig).forEach((module)=>{
    store.registerModule(module, storeConfig[module])
  })
}
window.insightApp = {
  Vue,
  methods: {
    registerAsyncRouter,
    registerStore
  },
  locale: {
    elementUI: {},
    megviiUI: {}
  }
}