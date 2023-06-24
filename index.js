const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;

const emitter = new EventEmitter()

class Router {
    constructor() {
        this.endpoints = {}
    }

    request(method = 'GET', path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {}
        }
        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            throw Error(`${method} in this address ${path} exist yet`)
        }
        endpoint[method] = handler
        emitter.on(`[${path}]:[${method}]`, (req, res) => {
            handler(req, res)

        })
    }

    get(path, handler) {
        this.request('GET', path, handler)
    }

    post(path, handler) {
        this.request('POST', path, handler)
    }

    put(path, handler) {
        this.request('PUT', path, handler)
    }

    delete(path, handler) {
        this.request('DELETE', path, handler)
    }
}

const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
})

router.get('/posts',  (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS')
})

const server = http.createServer((req, res) => {
    const emitted = emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
    if (!emitted) {
        res.end()
    }
})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
