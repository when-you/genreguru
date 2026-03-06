require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();

// Serve all files from the "public" folder
app.use(express.static('public'));

// When Spotify redirects back to /callback, serve the same index.html
// The frontend JavaScript will detect the login code in the URL and handle it
app.get('/callback', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`GenreGuru running at http://127.0.0.1:${PORT}`);
});
