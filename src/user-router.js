const Router = require('../framework/Router');

const router = new Router()

const users = [
    {id: 1, name: 'Nikcolay'},
    {id: 2, name: 'Alex'},
]

router.get('/users', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users));
});

router.post('/users', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    res.end(JSON.stringify(users));
});

module.exports = router
