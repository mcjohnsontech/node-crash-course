const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// if (!fs.existsSync('./docs/blog4.txt')) {
    
    
    readStream.on('data', (chunk) =>{
        writeStream.write('\n New Chunk \n');
        writeStream.write(chunk);
    })
// }

// readStream.on('data', (chunk) =>{
//     console.log('-----NEW CHUNK--------');
//     console.log(chunk);
//     writeStream.write('\n New Chunk \n');
//     writeStream.write(chunk)
// })

// Piping

// readStream.pipe(writeStream);