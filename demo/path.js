const path = require('path');

console.log('название файла :', path.basename(__filename));

console.log('имя дериктории: ', path.dirname(__filename));

console.log('расщиреник файла: ', path.extname(__filename));

console.log('Parse: ', path.parse(__filename));

console.log(path.join(__dirname, 'server', 'index.html'))