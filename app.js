const http = require('http'); // like a PHP require

// require is more or less the same as a JS import
// const hostname = '127.0.0.1'; // this is a localhost
const port = process.env.PORT || 3000; // localhost:3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Yeo 9 days till the World');
});

server.listen(port, () => {
  console.log(`Server is now running at http://${hostname}:${port}/`);
});