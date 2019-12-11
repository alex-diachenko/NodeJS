const fs = require('fs');
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), () => {
//     if(err) {
//         throw err;
//     }

//     console.log('папка создана')
// })

const filePath = path.join(__dirname, 'test', 'text.txt');

// fs.writeFile(filePath, '\nHello again', err => {
//     if(err) {
//         throw err;
//     }

//     console.log('файл создан')
// })

// fs.appendFile(filePath, '\nHello again', err => {
//     if(err) {
//         throw err;
//     }

//     console.log('файл создан')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        throw err
    }

    console.log(content)
    // const data = Buffer.from(content)
    // console.log('content', data.toString())
})

