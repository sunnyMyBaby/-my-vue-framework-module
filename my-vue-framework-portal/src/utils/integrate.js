// 集成资源
import Vue from 'vue'
import router from './router.utils'
import store from '@/store'

// 注册异步路由方法
// asyncRoutes [{component:...,meta: {...},path:...,children:{...}}]
// parentNav 父级导航比如说倒出来的moduleA了里边包含了search，regester...等模块那么这写子模块都是moduleA的子模块
// moduleName
const registerAsyncRouter = (asyncRoutes, parentNav, moduleName)=>{
  let parentName = parentNav;
  asyncRoutes.forEach((route) => {
    console.log(route);
    // 给每个组件添加meta便于SEO？
    route.meta = {
      parent: parentName,
      moduleName
    }
  });
  // router.addRoutes(asyncRoutes)
}

window.insightApp = {
  Vue,
  methods: {
    registerAsyncRouter
  }
}