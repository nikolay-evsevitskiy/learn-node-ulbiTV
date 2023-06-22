const Emitter = require('events');

const emitter = new Emitter();

const callback = (data, second, third) => {
    console.log('You sent message ' + data);
    console.log('Second argument ' + second);
}

emitter.on('message', callback)

emitter.once('message', (data, second, third) => {
    console.log('You sent message ' + data);
    console.log('Second argument ' + second);
})

emitter.emit('message')
emitter.emit('message')
emitter.emit('message')
emitter.emit('message')

emitter.removeAllListeners()
emitter.removeListener('message', callback)

// const MESSAGE = process.env.message || '';
//
// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123)
// } else {
//     emitter.emit('message', 'You didn\'t point out message')
// }

// When use it?
//http
//websockets
//long pulling
//clusters



