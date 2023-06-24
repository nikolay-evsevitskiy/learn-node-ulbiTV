const http = require('http');
const EventEmitter = require('events');
const e = require("express");

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
    }

    addRouter(router) {
        Object.keys(router.endpoint).forEach(path => {
            const endpoint = router.endpoint[path];
            Object.keys(endpoint).forEach((method)=>{
                const handler = endpoint[method];
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    handler(req, res)

                })
            })
        })
    }

    _createServer() {
        return http.createServer((req, res) => {
            const emitted = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res)
            if (!emitted) {
                res.end()
            }
        })

    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`
    }
}
