import * as pptr from 'puppeteer'
import { Browser, Page } from 'puppeteer'

const getPPTR = async (): Promise<{ browser: Browser; page: Page }> => {
  const browser = await pptr.launch({
    args: ['--no-sandbox', '--window-size=1920,1080', '--lang=zh-CN']
  })
  const [page] = await browser.pages()
  return { browser, page }
}

export { getPPTR }
