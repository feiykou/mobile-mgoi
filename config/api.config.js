
import { NODE_ENV } from '../environment'

const apiMap = {
  development: {
    proxyUrl: '/proxy',
    baseUrl: 'http://localhost:3001'
  },
  production: {
    proxyUrl: '',
    baseUrl: 'http://www.mgoi.net'
  }
}

export default apiMap[NODE_ENV]