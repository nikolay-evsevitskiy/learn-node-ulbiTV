const fs = require('fs');
const path = require('path');

//Создание директории
//console.log('Start')
//
// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('Папка создана!')
//     }
// });
// console.log('End')

//Удаление директории
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

//Создание файла
// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 jweihfkfkkvfkfjh', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Файл записан!')
// })
//
// fs.appendFile(path.resolve(__dirname, 'test.txt'), '1111111111', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Файл записан!')
// })
const pathOfFile = path.resolve(__dirname, 'test.txt')
const data1 = 'Hello World!'
const data2 = 'Goodbye World!'

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            reject(err.message)
        }
        resolve('Файл записан!')
    }))
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            reject(err.message)
        }
        resolve('Файл записан!')
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}


writeFileAsync(pathOfFile, data1)
    .then(() => appendFileAsync(pathOfFile, data2))
    .then(() => appendFileAsync(pathOfFile, '123'))
    .then(() => appendFileAsync(pathOfFile, '456'))
    .then(() => appendFileAsync(pathOfFile, '789'))
    .then(() => readFileAsync(pathOfFile))
    .then(data => console.log(data))
    .catch(err => console.log(err))

