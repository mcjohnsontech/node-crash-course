const { create } = require('domain');
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request made');
})


server.listen(3000, 'localhost', ()=>{
    console.log(`port is listening on ${3000}`);
})