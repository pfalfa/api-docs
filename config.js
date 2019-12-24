require('dotenv').config()
const { description, version, license } = require('./package.json')

module.exports = {
  app: {
    port: 3030,
    route: '/api',
    pageLimit: 10,
    httpsKey: null,
    httpsCert: null,
    host: 'localhost',
    rateLimitSuspendTime: 5,
    rateLimitMaxHitPerIP: 500,
    sessionSecret: 'Se0rang@3ks4',
    loggerFilePath: './logs/access.log',
  },
  swagger: {
    swaggerDefinition: {
      openapi: '3.0.1',
      host: 'http://localhost:3030',
      basePath: '/',
      info: {
        title: 'API Document Pfalfa',
        version,
        description,
        // contact: { email: 'eksant@gmail.com' },
        license: {
          name: license,
          url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
        },
      },
      securityDefinitions: {
        bearerAuth: {
          type: 'apiKey',
          name: 'Authorization',
          scheme: 'bearer',
          in: 'header',
        },
      },
      produces: ['application/json'],
      schemes: ['https'],
      servers: [{ url: 'https://pfalfa-api.pfalfa.io' }, { url: 'https://pfalfa-ihub-api.pfalfa.io' }],
    },
    apis: ['./docs/api/*.js'],
  },
}
