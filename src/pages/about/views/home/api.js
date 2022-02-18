import { instance, baseURL } from '@utils/request'

//请求菜单
export const homeMenuUrl = (body) =>
  instance.get(`/server/homeMenu`, { params: body })
