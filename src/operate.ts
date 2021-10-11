import { logger } from './logger'
import { getPPTR } from './tools'

const login = async (username: string, password: string): Promise<void> => {
  const { browser, page } = await getPPTR()
  await page.goto('http://gw.bnu.edu.cn')
  await page.waitForNetworkIdle()
  await page.evaluate(() => {
    const $username = document.querySelector<HTMLInputElement>('input#username')
    if ($username) {
      $username.value = ''
    }
    const $password = document.querySelector<HTMLInputElement>('input#password')
    if ($password) {
      $password.value = ''
    }
  })
  await page.type('input#username', username)
  await page.type('input#password', password)
  await page.click('button#login')
  await page.waitForNetworkIdle()
  const { error, message, data } = await page.evaluate(() => {
    const $body = document.querySelector('body')
    const bodyHTML = $body ? $body.innerHTML : ''
    if (bodyHTML.includes('用户不存在')) {
      return { error: true, message: '用户不存在' }
    } else if (bodyHTML.includes('当前IP已在线')) {
      return { error: true, message: '当前IP已在线' }
    } else {
      const $username = document.querySelector<HTMLSpanElement>('#user_name')
      const $usedFlow = document.querySelector<HTMLSpanElement>('#used_flow')
      const $usedTime = document.querySelector<HTMLSpanElement>('#used_time')
      const $balance = document.querySelector<HTMLSpanElement>('#balance')
      const $ip = document.querySelector<HTMLSpanElement>('#ip')

      const username = $username ? $username.innerText : ''
      const usedFlow = $usedFlow ? $usedFlow.innerText : ''
      const usedTime = $usedTime ? $usedTime.innerText : ''
      const balance = $balance ? $balance.innerText : ''
      const ip = $ip ? $ip.innerText : ''

      return {
        error: false,
        data: { username, usedFlow, usedTime, balance, ip }
      }
    }
  })
  if (error) {
    logger.warn(message)
  } else {
    logger.info(
      `登录结果：\n\n用户名：${data?.username}\n已用流量：${data?.usedFlow}\n已用时长：${data?.usedTime}\n账户余额：${data?.balance}\nIP地址：${data?.ip}\n`
    )
  }
  await page.close()
  await browser.close()
}

export { login }
