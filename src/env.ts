import { cli } from './cli'

const NODE_ENV = process.env.NODE_ENV

const getUserName = (): string =>
  cli.opts().username ??
  process.env.USERNAME ??
  process.env.npm_package_config_USERNAME

const getPassword = (): string =>
  cli.opts().password ??
  process.env.PASSWORD ??
  process.env.npm_package_config_PASSWORD

export { NODE_ENV, getUserName, getPassword }
