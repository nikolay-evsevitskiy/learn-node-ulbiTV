const fs = require('fs');
const path = require('path');

//Создание директории
console.log('Start')

fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Папка создана!')
    }
});
console.log('End')
