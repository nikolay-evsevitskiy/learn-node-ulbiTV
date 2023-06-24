const http = require('http');
const EventEmitter = require('events');
const PORT = process.env.PORT || 5000;
const Router = require('./framework/Router');
const Application = require('./framework/Application');
const application = new Application();
const router = new Router();



router.get('/users', (req, res) => {
    res.end('YOU SEND REQUEST TO /USERS')
})

router.get('/posts',  (req, res) => {
    res.end('YOU SEND REQUEST TO /POSTS')
})
application.addRouter(router);
application.listen(PORT, () => console.log(`Server started on port ${PORT}`))
