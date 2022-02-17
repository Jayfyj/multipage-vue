import Mock from 'mockjs'

const data = [
  { url: '/textAlignPage', text: '字体位置' },
  { url: '/vuexDomePage', text: 'vuex使用例子' },
  { url: '/dragPage', text: '拖拽排列' },
  { url: '/scrollStylePage', text: '滚动类型' },
  { url: '/fullPage', text: '全屏滚动切换' },
  { url: '/chooseAllPage', text: '全选和反选例子' },
  { url: '/directivesPage', text: '指令页面' },
  { url: '/composeAPI', text: '组合API' }
]

Mock.setup({
  timeout: '1000' // 表示响应时间介于 200 和 600 毫秒之间，默认值是'10-100'。
})

Mock.mock(RegExp('/server/homeMenu' + '.*'), 'get', (options) => {
  console.log(options)
  return Mock.mock({ data, code: '0000' })
})

export default Mock
