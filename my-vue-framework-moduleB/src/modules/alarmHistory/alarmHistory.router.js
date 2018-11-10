import layout from '@/modules/layout/layout'
export default [{
  path: '/alarmHistory',
  component: layout,
  children:[
    {
      path: '',
      name: 'alarmHistory',
      component: ()=> import('./alarmHistory.vue')
    }
  ]
}]