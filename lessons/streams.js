// Readable
// Writable
// Duplex  - For read and write data files
// Transform - It is like Duplex, but can change data when read

const fs = require('fs')
const path = require('path')

// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err.message
//     } else {
//         console.log(data)
//     }
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//One chunk is weight 64kb in default
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// stream.on('end', () => console.log('Read end'))
// stream.on('open', () => console.log('Read start'))
// stream.on('error', (err) => console.log(err))

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
//
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n');
// }
//
// writableStream.end()
// writableStream.close()
// writableStream.destroy()
// writableStream.on('error')


// const http = require('http');
//
// http.createServer((req, res) => {
//     //req - readable stream
//     //res - writable stream
//     const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
//     //Stream will finish to read earlier than customer  download
//     stream.pipe(res)
// })
