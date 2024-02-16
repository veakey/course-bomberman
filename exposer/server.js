'use strict';

// server.js
const express = require('express');
const path = require('node:path');
const fs = require('node:fs');
const os = require('node:os');

const app = express();
const port = 3002;

// Serve les fichiers du dossier actuel
// app.use(express.static(path.join(__dirname, '.')));
// app.use(express.static(path.join(__dirname, '.')));

app.use(express.static(path.join(process.cwd(), '.')));


app.use((req, res, next) => {
  console.log(`Requête reçue: ${req.method} ${req.url}`);
  next();
});


function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const interfaceName of Object.keys(interfaces)) {
    for (const iface of interfaces[interfaceName]) {
      // Ignore les adresses IPv6 et les adresses internes (127.0.0.1)
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'Non trouvée';
}

app.listen(port, () => {
  // Find ip address
  const networkInterfaces = os.networkInterfaces();
  const ip = getLocalIP();

  // List files in the current directory
  console.log('Files in the current directory:');
  console.log('--------------------------------');
  const files = fs.readdirSync('.');
  for (const file of files) {
    console.log(file);
  }
  console.log('--------------------------------');

  console.log(`Serveur démarré sur http://${ip}:${port}`);
});
