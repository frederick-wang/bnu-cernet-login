import { getActionType } from './cli'
import { getUserName, getPassword } from './env'
import { logger } from './logger'
import { login } from './operate'

const username = getUserName()
const password = getPassword()

if (!username || !password) {
  logger.error('username 或 password 参数为空！')
  process.exit()
}

if (getActionType() === 'login') {
  login(username, password)
}
