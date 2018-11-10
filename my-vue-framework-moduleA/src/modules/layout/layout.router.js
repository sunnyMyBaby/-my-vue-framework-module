export default [{
  path: '/',
  name: 'layout',
  redirect:'/alarmRealtime',
  component: ()=> import(/* webpackChunkName: "appview" */'@/modules/layout/layout')
}]