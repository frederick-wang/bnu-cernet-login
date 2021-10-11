import { Command } from 'commander'

type ActionType = 'login'

let actionType: ActionType

const cli = new Command()

cli
  .version('0.0.1')
  .option('-u, --username <username>', '校园网用户名')
  .option('-p, --password <password>', '校园网密码')

cli
  .command('login')
  .description('登录')
  .action(() => {
    actionType = 'login'
  })

cli.parse(process.argv)

const getActionType = (): ActionType => actionType

export { cli, getActionType }
