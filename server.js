const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Set the port
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname + '/public'));

// Set up a route for the index page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Set up a route for the messages
app.get('/messages', (req, res) => {
  res.send('Hello World!');
});

// Start the server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
