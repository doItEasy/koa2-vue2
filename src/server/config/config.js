import _ from 'lodash'
import development from './development'
import production from './production'

export const env = process.env.NODE_ENV || 'development'
console.log(process.env.NODE_ENV)

const configs = {
  development: development,
  production: production
}

const defaultConfig = {
  env: env
}

console.log(env + JSON.stringify(defaultConfig))

// merge 组合两个对象成为一个对象
const config = _.merge(defaultConfig, configs[env])

export default config