const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.url, req.method, req.headers);
    // res.setHeader('Content-Type','text/html');
    // res.write('<html>');
    // res.write('<head><title>first node.js</title></head>')
    // res.write('<body>');
    // res.write('<h1>Welcome</h1>')
    // res.write('</body>');
    // res.write(',</html>');
    if(req.url==='/home'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>first node.js</title></head>')
        res.write('<body>');
        res.write('<h1>Welcome to Home</h1>')
        res.write('</body>');
        res.write('</html>');
    }

    if(req.url==='/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>first node.js</title></head>')
        res.write('<body>');
        res.write('<h1>Welcome to About us page</h1>')
        res.write('</body>');
        res.write('</html>');
    }
    if(req.url==='/node'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>first node.js</title></head>')
        res.write('<body>');
        res.write('<h1>Welcome to node js project</h1>')
        res.write('</body>');
        res.write('</html>');
    }
});

server.listen(4000);