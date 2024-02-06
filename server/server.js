'use strict';

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');

const corsSettings = {
  origin: [
    'http://localhost:3000',
    'https://cyrbhd6crj.eu-west-3.awsapprunner.com/'
  ], // Autorise uniquement cet origine
  methods: ['GET'], // Méthodes HTTP autorisées
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin'], // En-têtes autorisés dans les requêtes
};

const app = express();
const server = createServer(app);
const io = new Server(server, {cors: corsSettings});

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/app/index.html'));
});

// serve static files
app.use(express.static(join(__dirname, '/app')));

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  socket.on('game', (data) => {
    console.log('game event', data);

    // dispatch to all clients
    io.emit('game', data);
  });
});

server.listen(3000, () => {
  // Find server relevant information such as ip, domain name
  const address = server.address();
  console.log(`server running at ${address.address}:${address.port}`);
});