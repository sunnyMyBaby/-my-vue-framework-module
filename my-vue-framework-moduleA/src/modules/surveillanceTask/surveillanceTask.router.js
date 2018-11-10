import layout from '@/modules/layout/layout'
export default [{
  path: '/surveillanceTask',
  component: layout,
  children:[{
    path: '',
    name: 'surveillanceTask',
    component: ()=> import('./surveillanceTask.vue'),
  }]
}]
