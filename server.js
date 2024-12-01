const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Serve the HTML file
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  
  // Read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(404).send('Not Found');
      return;
    }
    res.send(data);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});
