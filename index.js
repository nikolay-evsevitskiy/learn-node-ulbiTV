const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
const Router = require('./framework/Router')
const emitter = new EventEmitter()

const router = new Router();

router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
})

router.get('/posts',  (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS')
})

const server = http.createServer()

server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
