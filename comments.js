// Create web server
// Load the HTTP module
const http = require('http');

// Define a port number
const port = 3000;

// Create a server object
const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

// The server listens on the specified port and hostname
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
