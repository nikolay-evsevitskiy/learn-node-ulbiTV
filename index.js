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
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    if (req.url === '/users') {
        return res.end(JSON.stringify([
            {id: 1, name: 'Nikolay'}
        ]))
    }
    if (req.url === '/posts') {
        return res.end('POSTS')
    }

})

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
