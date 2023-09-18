const http = require('http');

const server = http.createServer((req,res)=>{
    console.log('My Name Is Shailesh');
    
});

server.listen(4000);
