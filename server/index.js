const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const config = require('../nuxt.config')
config.dev = process.env.NODE_ENV !== 'production'
    // const port = process.env.PORT || 3000

async function start() {
    // We get Nuxt instance
    const nuxt = new Nuxt(config)

    const { host, port } = nuxt.options.server

    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    } else {
        await nuxt.ready()
    }


    // Render every route with Nuxt.js
    app.use(nuxt.render)

    // Build only in dev mode with hot-reloading

    // Listen the server
    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port + '`.')
}

start()