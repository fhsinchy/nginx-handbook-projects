const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);
    res.end(`{ "status": "success", "message": "You're reading The NGINX Handbook!\n" }`);
});

server.listen(3000, 'localhost', () => {
    console.log('running on http://localhost:3000/');
});