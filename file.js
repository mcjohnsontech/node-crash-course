const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// writefile

// fs.writeFile('./docs/blog1.txt', 'hello World', ()=>{
//     console.log('file was written');
// })
// fs.writeFile('./docs/blog2.txt', 'hello World', ()=>{
//     console.log('file was written');
// })


// Directories


// if (!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log('folder created');
//     })
// }else{
//     fs.rmdir('./assets', (err) => {
//         if(err){
//             console.log(err)
//         }
//         console.log('folder deleted');
//     })
// }


// Remove


// if (fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt', (err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log('file deleted');
//     })
// }
