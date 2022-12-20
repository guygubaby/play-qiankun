import http from 'http'
import path from 'path'
import sirv from 'sirv'

interface ServeOptions {
  static?: string
  port?: number
  host?: string
  /**
   * @default '/'
   */
  basePath?: string
}

function serve(options: string | ServeOptions) {
  if (typeof options === 'string') {
    options = {
      static: options,
    }
  }

  const {
    basePath = '',
    static: servePath,
    port = 8238,
    host = '127.0.0.1',
  } = options

  const baseUrl = `http://${host}:${port}${basePath}`

  const serve = sirv(servePath, {
    dev: true,
    single: true,
    dotfiles: true,
    setHeaders(res) {
      res.setHeader('Access-Control-Allow-Origin', '*')
    },
  })

  const server = http.createServer((req, res) => {
    serve(req, res)
  })

  server.listen(port, host)

  return {
    basePath,
    baseUrl,
    stop() {
      return server.close()
    },
  }
}

const cwd = process.cwd()

const dist = path.resolve(cwd, 'dist')

const { baseUrl } = serve(dist)

// eslint-disable-next-line no-console
console.log(`Serving ${dist} at ${baseUrl}`)
