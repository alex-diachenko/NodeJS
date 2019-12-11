// const chalk = require('chalk')
// const text = require('./data')


// console.log(chalk.green(text));

// console.log(__filename)

// создание сервера! 

const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)
    let contentType = 'text/html'

    switch(ext) {
        case '.css' :
            contentType = 'text/css'
            break
        case '.js' :
            contentType = 'text/javascript'
            break
        default: 
            contentType = 'text/html'
    }

    if(!ext) {
        filePath += '.html'
    }

    console.log(filePath);

    fs.readFile(filePath, (err, content) => {
        if(err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data)=>{
                if(err) {
                    res.writeHead(500);
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Content-Type': contentType
                    })
                  res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Content-Type': contentType
            })
        res.end(content)
        }
    })
})

const PORT = process.env.PORT || 3000

server.listen(3000, ()=>{
    console.log(`server has been started on ${PORT}`)
})






