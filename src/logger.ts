import { format, transports, createLogger } from 'winston'

const { combine, colorize, splat, timestamp, printf } = format

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize(),
    splat(),
    timestamp(),
    printf(({ level, message, timestamp, ...metadata }) => {
      let msg = `${new Date(
        timestamp
      ).toLocaleString()} [${level}] : ${message} `
      if (metadata && Object.entries(metadata).length) {
        msg += JSON.stringify(metadata)
      }
      return msg
    })
  )
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console())
}

export { logger }
