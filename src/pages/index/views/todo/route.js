export default [
  {
    path: '/todo',
    name: 'IndexTodo',
    component: () => import('./index'),
    meta:{
      isFloatBtnShow:true
    }
  },
]

