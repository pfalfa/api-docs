const os = require('os')
const path = require('path')
const cors = require('cors')
const http = require('http')
const https = require('https')
const logger = require('morgan')
const helmet = require('helmet')
const cluster = require('cluster')
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const session = require('express-session')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const rateLimit = require('express-rate-limit')

/** express config */
const config = require('./config')
const app = express().set('port', config.app.port)
const server =
  !config.app.httpsKey && !config.app.httpsCert
    ? http.createServer(app)
    : https.createServer(
        {
          key: fs.readFileSync(config.app.httpsKey),
          cert: fs.readFileSync(config.app.httpsCert),
        },
        app
      )

/** swagger config */
const swaggerConfig = swaggerJSDoc(config.swagger)
const swaggerOptions = {
  customSiteTitle: 'Identity Hub API',
  customCss: '.topbar { display: none }',
}
const swaggerUiSetup = swaggerUi.setup(swaggerConfig, swaggerOptions)

/** limiter config */
const limiter = rateLimit({
  windowMs: config.app.rateLimitSuspendTime * 60 * 1000,
  max: config.app.rateLimitMaxHitPerIP,
})

/** express init */
app.use(cors())
app.use(bodyParser.urlencoded({ limit: '30mb', extended: false }))
app.use(bodyParser.json({ limit: '30mb', extended: false }))
app.use(helmet())
app.use(compression())
app.use(logger('dev'))
app.use(session({ secret: config.app.sessionSecret, resave: false, saveUninitialized: true, cookie: { maxAge: 60000 } }))

/** api docs */
app.use(`${config.app.route}/demo`, limiter, swaggerUi.serve, swaggerUiSetup)
app.get(`${config.app.route}/swagger.json`, (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.send(swaggerConfig)
})
app.get(
  config.app.route,
  (req, res) => {
    res.sendfile(path.join(__dirname, './html/apidoc.html'))
  },
  swaggerUiSetup
)

/** opening cluster */
if (cluster.isMaster) {
  const cpus = os.cpus().length
  console.log(`Mode Cluster. Forking for ${cpus} CPUs`)

  for (let i = 0; i < cpus; i++) {
    cluster.fork()
  }
} else {
  server.listen(config.app.port, () => {
    console.log(`Open API Docs on Port ${config.app.port} Handled by Process ${process.pid}`)
  })

  /** closing cluster */
  process.on('SIGINT', () => {
    server.close(err => {
      if (err) {
        console.error(`Error API Docs : ${err}`)
        process.exit(1)
        return
      }
      console.log(`Close API Docs on Port ${config.app.port} Handled by Process ${process.pid}`)
      process.exit(0)
    })
  })
}

module.exports = app
