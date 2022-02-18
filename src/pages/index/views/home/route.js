export default [
  {
    path: '/',
    name: 'IndexHome',
    component: () => import('../home'),
    meta:{
      isFloatBtnShow:true
    }
  },
]

