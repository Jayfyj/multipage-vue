import { instance, baseURL } from '@utils/request'

export const bottomBtnMenuUrl = (body) => instance.get(`/server/bottomBtnMenu`, { params: body })
