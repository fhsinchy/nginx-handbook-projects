const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    
    res.writeHead(200);
    res.end("response from server - 3.\n");
});

server.listen(3002, 'localhost', () => {
    console.log('running on http://localhost:3002/');
});