import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './integrate.js';
// 我们在做异步模块加载的时候其实我们用的是vue动态组件添加的
// setTimeout( function(){ while(true){} } , 100);
// setTimeout( function(){ alert('你好!'); } , 200);
// setInterval( callbackFunction , 200);
NProgress.start();
setTimeout(()=>{
  NProgress.done()
}, 1000)
// 这个路径其实需要跟开发和生产环境相关的
const modulePublicPath =  'http://localhost:8081'
// 加载异步模块方法 这个工作其实主要是把我们的异步模块通过js引入的方式添加到body下面
const loadAsyncModuleFactory = (modelPath)=>{
  return new Promise((resolve, reject)=>{
    const script = document.createElement('script')
    script.src = modelPath;
    script.async = true;
    script.onload = function(){
      resolve()
    }
    script.onerror = function(err){
      reject()
    }
    document.body.appendChild(script)
  })
}
// 加载异步组件
// asyncModuleFactory('alarm', 'results', resolve)
const asyncModuleFactory = (parentNav, navName) => {
  const moduleName = `${navName}AsyncModule`
  const modulePath = `${modulePublicPath}/${parentNav}/static/js/${moduleName}.js`
  const loadScript = loadAsyncModuleFactory(modulePath)
  // 在module配置打包的时候到处是以export.default方式进行的
  // 而且在配置打包的时候会有一个模块变量名，加载完成之后这个变量名就会挂载到window下面
  // export.default的内容其实包括了
  loadScript.then(()=>{
    // 注册自路由模块
    console.log(window[moduleName]);// 这里包含了模块到处配置的export.js里的内容store，router等
    const asyncModule = window[moduleName].default
    window.insightApp.methods.registerAsyncRouter(asyncModule.routes,parentNav,navName)
  })
}
// 根据菜单构建routes
asyncModuleFactory('moduleA','search')
buildRoutesByMenus()
const buildRoutesByMenus = ()=>{
  const rootRoute = {
    path: '/',
    redirect: `/search`
  }
  const parentsRoute = {
    path: `/search`,
    component: Layout,// 注册
    meta: {
      parent: 'search 路由'
    }
  };
}