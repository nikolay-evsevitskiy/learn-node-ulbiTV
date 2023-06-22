const oss = require('lessons/oss');
const cluster = require('cluster');


// console.log(oss.platform());
// console.log(oss.arch());
// console.log(oss.cpus());
// console.log(oss.cpus().length);

if (cluster.isMaster) {
    for (let i = 0; i < oss.cpus().length - 2; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Воркер с pid = ${worker.process.pid} умер`)
        if (code) {
            cluster.fork()
        } else {
            console.log('Воркер умер...')
        }

    })
} else {
    console.log(`Воркер с  pid= ${process.pid} запущен`)

    setInterval(() => {
        console.log(`Воркер с  pid= ${process.pid} ещё работает`)
    }, 5000)
}



