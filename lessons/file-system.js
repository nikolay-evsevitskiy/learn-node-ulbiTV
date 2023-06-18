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
fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 jweihfkfkkvfkfjh', (err) => {
    if (err) {
        throw err
    }
    console.log('Файл записан!')
})

fs.appendFile(path.resolve(__dirname, 'test.txt'), '1111111111', (err) => {
    if (err) {
        throw err;
    }
    console.log('Файл записан!')
})
